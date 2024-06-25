import { useEffect, ComponentType } from "react"

function withLog(Component:any) {
    return function WithLog() {
        useEffect(() => {
            console.log('Component did mount');
            return () => {
                console.log('Component will unmount');
            };
        }, []);
        return <Component/>
    };
}
export default withLog