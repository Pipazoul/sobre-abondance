<script lang="ts">
    import {getItem} from '$lib/api';

    export let ids: number[];
    export let unit: string;

    // for each id, get the event and add it to the array
    let eventCalls = async () => {
        let events = [];
        for (let id of ids) {
            let event = await getItem("Events", id);
            events.push(event);
        }
        //eventsData.shortage = estimatedShortageDate(eventsData.events)
        // push estimatedShortageDate on top of the array
        let eventsData = {
            events: events,
            unit: unit,
            shortage: await estimatedShortageDate(events)
        }
        return eventsData;
    }

    let getShortageDate = (stock:number,production:number, consumption:number) => {
        // take highest value between production and consumption
        let highest = Math.max(production, consumption);
        let lowest = Math.min(production, consumption);
        return Math.round(stock / (highest - lowest));
    }

    let estimatedShortageDate = async (events) => {
        //get current year
        let currentYear = new Date().getFullYear();
        // filter events by year closest to current year
            let filteredEvents = events.filter(event => new Date(event.event_date).getFullYear() == currentYear);

            // if no event for current year, get the closest year
            if (filteredEvents.length == 0) {
                filteredEvents = events.filter(event => new Date(event.event_date).getFullYear() == currentYear - 1);
            }
            // filter events by type "production" "consumption" "stock"
            let productionEvents = filteredEvents.filter(event => event.handling_type == "production");
            let consumptionEvents = filteredEvents.filter(event => event.handling_type == "consumption");
            let stockEvents = filteredEvents.filter(event => event.handling_type == "stock");


            // get the shotage date for each event
            let shortageDate = await getShortageDate(stockEvents[0]?.quantity, productionEvents[0]?.quantity, consumptionEvents[0]?.quantity);

            return shortageDate;
    }

</script>
<section>
    {#await eventCalls()}
        <p>Chargement...</p>
    {:then eventsData}

        <h2 class="uppercase text-4xl font-black text-white mb-10">Durabilité</h2>
        <div class="flex flex-row flex-wrap w-full">
            <div class="flex flex-col  p-4 bg-indigo-400 rounded-md h-52 w-52 ml-7 mb-7 text-2xl uppercase font-bold justify-center text-center text-white">{eventsData.shortage} <br> années</div>
            {#each eventsData.events as event}
            <div class="flex flex-col  p-4 bg-indigo-400 rounded-md h-52 w-52 ml-7 mb-7 text-2xl uppercase font-bold justify-center text-center text-white">
                 {event?.quantity} {eventsData.unit} <br> {event.title} 
            </div>
        {/each}
        </div>


        <!--<h2>Disponibilité sur les 200 prochaines années  </h2>
        <div class="flex flex-col">
            <div class="flex flex-wrap">Dispo : <div class="w-5 h-5 bg-green-500 border"></div></div>
            <div class="flex flex-wrap">Rupture : <div class="w-5 h-5 bg-red-600 border"></div></div>
        </div>
        <div class="flex flex-wrap mt-5">
            {#each Array(200)  as _, i }
                {#if i <= eventsData.shortage}
                    <div class="w-5 h-5 bg-green-500 border"></div>
                {:else}
                    <div class="w-5 h-5 bg-red-600 border"></div>
                {/if}
            {/each}
        </div>
    {:catch error}
        <p>Erreur: {error.message}</p>    -->
    {/await}

</section>