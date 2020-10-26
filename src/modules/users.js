import { reactive, toRefs } from "vue";

const state = reactive({
    error: null,
    users: null,
    loaded: false,
    loading: false,
});

export default function getStatistics() {
    const load = async () => {
        if (!state.loading) {
            try {
                state.loading = true
                const usersResponse = await fetch(
                    "http://rivalchess-statsapi-lb-937543031.eu-west-2.elb.amazonaws.com/matchUpStats"
                );
                state.users = await usersResponse.json();
                state.loading = false
                setInterval(load, 10000)
            } catch (e) {
                state.error = e;
                state.loading = false
                setInterval(load, 60000)
            }
        }
    };

    return { ...toRefs(state), load };
}
