import { Watch } from "react-loader-spinner";
import { useFetch } from "../hooks/fetchHook";
import { VictoryPie, VictoryTooltip } from "victory";
import { useTitle } from "../hooks/titleHook";
import { sumPercentWithTotal } from "../utils/common";

export const Volume = () => {
    let [loaded, fetchData] = useFetch("/api/volume");
    useTitle("Объем ETH через мост / мост + биржу пользователей | Статистика по StarkNet");
    return !loaded ? <Watch
        height="80"
        width="80"
        radius="48"
        color="#0c0c4f"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        visible={true}
    /> : fetchData.data === undefined ? <div>{fetchData.error}</div> :
        <> <div className="victoryPie">
            <h3 className="textCenter">Статистика по объему ETH через мосты StarkGate / Orbiter / LayerSwap пользователей</h3>
            <div className="textCenter">Наведите курсор на нужную часть графика</div>
            <VictoryPie
                colorScale={"warm"}
                style={{ labels: { fontSize: 12 } }}
                labelComponent={
                    <VictoryTooltip dy={0} centerOffset={{ x: 25 }} />
                }
                data={[
                    { label: `Менее 0.01 ETH (${fetchData.data.bridgesVolume.lessThan5of1000}, ${sumPercentWithTotal(fetchData.data.bridgesVolume.lessThan5of1000, fetchData.data.bridgesVolume.lessThan5of1000 + fetchData.data.bridgesVolume.lessThan1of100 + fetchData.data.bridgesVolume.lessThan1of10 + fetchData.data.bridgesVolume.lessThan1of2 + fetchData.data.bridgesVolume.lessThan1)}%)`, x: fetchData.data.bridgesVolume.lessThan5of1000, y: fetchData.data.bridgesVolume.lessThan5of1000 },
                    { label: `0.01 ETH - 0.05 ETH (${fetchData.data.bridgesVolume.lessThan1of100}, ${sumPercentWithTotal(fetchData.data.bridgesVolume.lessThan1of100, fetchData.data.bridgesVolume.lessThan5of1000 + fetchData.data.bridgesVolume.lessThan1of100 + fetchData.data.bridgesVolume.lessThan1of10 + fetchData.data.bridgesVolume.lessThan1of2 + fetchData.data.bridgesVolume.lessThan1)}%)`, x: fetchData.data.bridgesVolume.lessThan1of100, y: fetchData.data.bridgesVolume.lessThan1of100 },
                    { label: `0.05 ETH - 0.1 ETH (${fetchData.data.bridgesVolume.lessThan1of10}, ${sumPercentWithTotal(fetchData.data.bridgesVolume.lessThan1of10, fetchData.data.bridgesVolume.lessThan5of1000 + fetchData.data.bridgesVolume.lessThan1of100 + fetchData.data.bridgesVolume.lessThan1of10 + fetchData.data.bridgesVolume.lessThan1of2 + fetchData.data.bridgesVolume.lessThan1)}%)`, x: fetchData.data.bridgesVolume.lessThan1of10, y: fetchData.data.bridgesVolume.lessThan1of10 },
                    { label: `0.1 ETH - 0.5 ETH (${fetchData.data.bridgesVolume.lessThan1of2}, ${sumPercentWithTotal(fetchData.data.bridgesVolume.lessThan1of2, fetchData.data.bridgesVolume.lessThan5of1000 + fetchData.data.bridgesVolume.lessThan1of100 + fetchData.data.bridgesVolume.lessThan1of10 + fetchData.data.bridgesVolume.lessThan1of2 + fetchData.data.bridgesVolume.lessThan1)}%)`, x: fetchData.data.bridgesVolume.lessThan1of2, y: fetchData.data.bridgesVolume.lessThan1of2 },
                    { label: `0.5 ETH - 1 ETH и более (${fetchData.data.bridgesVolume.lessThan1}, ${sumPercentWithTotal(fetchData.data.bridgesVolume.lessThan1, fetchData.data.bridgesVolume.lessThan5of1000 + fetchData.data.bridgesVolume.lessThan1of100 + fetchData.data.bridgesVolume.lessThan1of10 + fetchData.data.bridgesVolume.lessThan1of2 + fetchData.data.bridgesVolume.lessThan1)}%)`, x: fetchData.data.bridgesVolume.lessThan1, y: fetchData.data.bridgesVolume.lessThan1 },
                ]}
            /></div>
            <div className="line-break"></div>
            <div className="victoryPie">
                <h3 className="textCenter">Статистика по объему ETH через мосты + Okex пользователей</h3>
                <div className="textCenter">Наведите курсор на нужную часть графика</div>
                <VictoryPie
                    colorScale={"warm"}
                    style={{ labels: { fontSize: 12 } }}
                    labelComponent={
                        <VictoryTooltip dy={0} centerOffset={{ x: 25 }} />
                    }
                    data={[
                        { label: `Менее 0.01 ETH (${fetchData.data.bridgesWithCexVolume.lessThan5of1000}, ${sumPercentWithTotal(fetchData.data.bridgesWithCexVolume.lessThan5of1000, fetchData.data.bridgesWithCexVolume.lessThan5of1000 + fetchData.data.bridgesWithCexVolume.lessThan1of100 + fetchData.data.bridgesWithCexVolume.lessThan1of10 + fetchData.data.bridgesWithCexVolume.lessThan1of2 + fetchData.data.bridgesWithCexVolume.lessThan1)}%)`, x: fetchData.data.bridgesWithCexVolume.lessThan5of1000, y: fetchData.data.bridgesWithCexVolume.lessThan5of1000 },
                        { label: `0.01 ETH - 0.05 ETH (${fetchData.data.bridgesWithCexVolume.lessThan1of100}, ${sumPercentWithTotal(fetchData.data.bridgesWithCexVolume.lessThan1of100, fetchData.data.bridgesWithCexVolume.lessThan5of1000 + fetchData.data.bridgesWithCexVolume.lessThan1of100 + fetchData.data.bridgesWithCexVolume.lessThan1of10 + fetchData.data.bridgesWithCexVolume.lessThan1of2 + fetchData.data.bridgesWithCexVolume.lessThan1)}%)`, x: fetchData.data.bridgesWithCexVolume.lessThan1of100, y: fetchData.data.bridgesWithCexVolume.lessThan1of100 },
                        { label: `0.05 ETH - 0.1 ETH (${fetchData.data.bridgesWithCexVolume.lessThan1of10}, ${sumPercentWithTotal(fetchData.data.bridgesWithCexVolume.lessThan1of10, fetchData.data.bridgesWithCexVolume.lessThan5of1000 + fetchData.data.bridgesWithCexVolume.lessThan1of100 + fetchData.data.bridgesWithCexVolume.lessThan1of10 + fetchData.data.bridgesWithCexVolume.lessThan1of2 + fetchData.data.bridgesWithCexVolume.lessThan1)}%)`, x: fetchData.data.bridgesWithCexVolume.lessThan1of10, y: fetchData.data.bridgesWithCexVolume.lessThan1of10 },
                        { label: `0.1 ETH - 0.5 ETH (${fetchData.data.bridgesWithCexVolume.lessThan1of2}, ${sumPercentWithTotal(fetchData.data.bridgesWithCexVolume.lessThan1of2, fetchData.data.bridgesWithCexVolume.lessThan5of1000 + fetchData.data.bridgesWithCexVolume.lessThan1of100 + fetchData.data.bridgesWithCexVolume.lessThan1of10 + fetchData.data.bridgesWithCexVolume.lessThan1of2 + fetchData.data.bridgesWithCexVolume.lessThan1)}%)`, x: fetchData.data.bridgesWithCexVolume.lessThan1of2, y: fetchData.data.bridgesWithCexVolume.lessThan1of2 },
                        { label: `0.5 ETH - 1 ETH и более (${fetchData.data.bridgesWithCexVolume.lessThan1}, ${sumPercentWithTotal(fetchData.data.bridgesWithCexVolume.lessThan1, fetchData.data.bridgesWithCexVolume.lessThan5of1000 + fetchData.data.bridgesWithCexVolume.lessThan1of100 + fetchData.data.bridgesWithCexVolume.lessThan1of10 + fetchData.data.bridgesWithCexVolume.lessThan1of2 + fetchData.data.bridgesWithCexVolume.lessThan1)}%)`, x: fetchData.data.bridgesWithCexVolume.lessThan1, y: fetchData.data.bridgesWithCexVolume.lessThan1 },
                    ]}
                /></div>
        </>
};