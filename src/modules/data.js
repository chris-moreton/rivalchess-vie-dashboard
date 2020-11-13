import { reactive, toRefs } from "vue";

const state = reactive({
    error: null,
    data: null,
    totalMatchesPlayed: null,
    loaded: false,
    loading: false
});

export default function getStatistics() {
    const load = async () => {
        if (!state.loading) {
            state.loading = true
            try {
                const usersResponse = await fetch(
                    "http://rivalchess-statsapi-lb-937543031.eu-west-2.elb.amazonaws.com/matchUpStats"
                );
                state.data = await usersResponse.json();
                let matchUps = state.data['matchUps']
                state.totalMatchesPlayed = matchUps.reduce((t,n) => t + n.cnt, 0)
            } catch (e) {
                state.error = e;
            } finally {
                state.loading = false
            }
        }
    };

    return { ...toRefs(state), load };
}
