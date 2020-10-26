import { reactive, toRefs } from "vue";

const state = reactive({
    error: null,
    users: null,
    loaded: false,
    loading: false,
});

export default function useUsers() {
    const load = async () => {
        if (!state.loaded) {
            try {
                const usersResponse = await fetch(
                    "http://rivalchess-statsapi-lb-937543031.eu-west-2.elb.amazonaws.com/matchUpStats"
                );
                state.users = await usersResponse.json();
            } catch (e) {
                state.error = e;
            }
        }
    };

    return { ...toRefs(state), load };
}
