import { useEffect,FC,ComponentType,ComponentProps  } from "react"

function withLog<T extends ComponentType>(Component:T):T{
    function WithLog(props: ComponentProps<T>) {
        useEffect(() => {
            console.log('Component did mount');
            return () => {
                console.log('Component will unmount');
            };
        }, []);
        return <Component {...props} />
    }

    // 给包装组件一个正确的名称
    WithLog.displayName = `WithLog(${Component.name})`;

    return WithLog;
}
export default withLog