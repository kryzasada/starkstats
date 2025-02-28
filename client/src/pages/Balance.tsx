import { Watch } from "react-loader-spinner";
import { useFetch } from "../hooks/fetchHook";
import { VictoryPie, VictoryTooltip } from "victory";
import { useTitle } from "../hooks/titleHook";
import { sumPercentWithTotal } from "../utils/common";

export const Balance = () => {
    let [loaded, fetchData] = useFetch("/api/balance");
    useTitle("Баланс ETH пользователей | Статистика по StarkNet");
    return !loaded ? <Watch
        height="80"
        width="80"
        radius="48"
        color="#0c0c4f"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        visible={true}
    /> : fetchData.data === undefined ? <div>{fetchData.error}</div> :
        <div className="victoryPie">
            <h3 className="textCenter">Статистика по балансу ETH пользователей</h3>
            <div className="textCenter">Наведите курсор на нужную часть графика</div>
            <VictoryPie
                colorScale={"warm"}
                style={{ labels: { fontSize: 12 } }}
                labelComponent={
                    <VictoryTooltip dy={0} centerOffset={{ x: 25 }} />
                }
                data={[
                    { label: `Менее 0.005 ETH (${fetchData.data.lessThan5of1000}, ${sumPercentWithTotal(fetchData.data.lessThan5of1000, fetchData.data.lessThan5of1000 + fetchData.data.lessThan1of100 + fetchData.data.lessThan1of10 + fetchData.data.lessThan1of2 + fetchData.data.lessThan1)}%)`, x: fetchData.data.lessThan5of1000, y: fetchData.data.lessThan5of1000 },
                    { label: `0.005 ETH - 0.01 ETH (${fetchData.data.lessThan1of100}, ${sumPercentWithTotal(fetchData.data.lessThan1of100, fetchData.data.lessThan5of1000 + fetchData.data.lessThan1of100 + fetchData.data.lessThan1of10 + fetchData.data.lessThan1of2 + fetchData.data.lessThan1)}%)`, x: fetchData.data.lessThan1of100, y: fetchData.data.lessThan1of100 },
                    { label: `0.01 ETH - 0.1 ETH (${fetchData.data.lessThan1of10}, ${sumPercentWithTotal(fetchData.data.lessThan1of10, fetchData.data.lessThan5of1000 + fetchData.data.lessThan1of100 + fetchData.data.lessThan1of10 + fetchData.data.lessThan1of2 + fetchData.data.lessThan1)}%)`, x: fetchData.data.lessThan1of10, y: fetchData.data.lessThan1of10 },
                    { label: `0.1 ETH - 0.5 ETH (${fetchData.data.lessThan1of2}, ${sumPercentWithTotal(fetchData.data.lessThan1of2, fetchData.data.lessThan5of1000 + fetchData.data.lessThan1of100 + fetchData.data.lessThan1of10 + fetchData.data.lessThan1of2 + fetchData.data.lessThan1)}%)`, x: fetchData.data.lessThan1of2, y: fetchData.data.lessThan1of2 },
                    { label: `0.5 ETH - 1 ETH и более (${fetchData.data.lessThan1}, ${sumPercentWithTotal(fetchData.data.lessThan1, fetchData.data.lessThan5of1000 + fetchData.data.lessThan1of100 + fetchData.data.lessThan1of10 + fetchData.data.lessThan1of2 + fetchData.data.lessThan1)}%)`, x: fetchData.data.lessThan1, y: fetchData.data.lessThan1 },
                ]}
            /></div>
};