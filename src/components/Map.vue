</template>
<div class="d-flex text-center" style="height: 20vh">
    <div class="m-auto">
        <h4> Your current position</h4>
        Latitude: {{ currPos.lat.toFixed(2)}}, Lon

    </div>

</div>
</template>

<script >
import { computed } from 'vue'
import {useGeolocation } from '../useGeolocation'

export default {
    name: 'Map',
    setup() {
        const { coords } = useGeolocation()
        const currPos = computed (() => ({
            lat: coords.value.latitude,
            lng: coords.value.longitude
        }))
        return { currPos }
    }
}

</script>

<style scoped>
</style>