import { router } from "expo-router";

interface RouteParams {
    route: string;
}

export function goToRoute(route : string ) {
    router.push(route);
}