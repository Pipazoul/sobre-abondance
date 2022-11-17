<script lang="ts">
    import {getItem} from '$lib/api';

    export let ids: number[];
    export let unit: string;

    // for each id, get the event and add it to the array
    let eventCalls = async () => {
        let events = [];
        for (let id of ids) {
            events.push(await getItem("Events", id));
        }
        return events;
    }

    let getShortageDate = (stock:number,production:number, consumption:number) => {
        return stock / consumption - production
    }

    let estimatedShortageDate = () => {
        //get current year
        let currentYear = new Date().getFullYear();
        // filter events by year closest to current year
        let filteredEvents = eventCalls().then(events => {
            //convert event_date to Date object
            //console.log(new Date(events[0].event_date).getFullYear());

            let filteredEvents = events.filter(event => new Date(event.event_date).getFullYear() == currentYear);
            // if no event for current year, get the closest year
            if (filteredEvents.length == 0) {
                filteredEvents = events.filter(event => new Date(event.event_date).getFullYear() == currentYear - 1);
            }
            console.log(filteredEvents);
            return filteredEvents;
        });

    }
    estimatedShortageDate();

</script>
<section>
    {#await eventCalls()}
        <p>Chargement...</p>
    {:then events}
        {#each events as event}
            <div class="flex align-middle cursor-pointer mt-5 p-4 border">
                {event.title}
            </div>
        {/each}
    {:catch error}
        <p>Erreur: {error.message}</p>
    {/await}
</section>