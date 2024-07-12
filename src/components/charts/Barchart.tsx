import { ResponsiveBar } from "@nivo/bar";

export function BarChart({ data, className }:{ data:any[], className:string }) {
    const transformedData = data
        .filter(item => item.intensity !== undefined && item.intensity !== null)  
        .map((item, index) => ({
            name: item.country || `Item ${index + 1}`, 
            count: item.intensity,
        }));

    console.log("Original Data:", data);
    console.log("Transformed Data:", transformedData);

    return (
        <div className={className}>
            {transformedData.length > 0 ? (
                <ResponsiveBar
                    data={transformedData}
                    keys={["count"]}
                    indexBy="name"
                    margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
                    padding={0.3}
                    colors={["#2563eb"]}
                    axisBottom={{
                        tickSize: 0,
                        tickPadding: 16,
                    }}
                    axisLeft={{
                        tickSize: 0,
                        tickValues: 4,
                        tickPadding: 16,
                    }}
                    gridYValues={4}
                    theme={{
                        tooltip: {
                            chip: {
                                borderRadius: "9999px",
                            },
                            container: {
                                fontSize: "12px",
                                textTransform: "capitalize",
                                borderRadius: "6px",
                            },
                        },
                        grid: {
                            line: {
                                stroke: "#f3f4f6",
                            },
                        },
                    }}
                    tooltipLabel={({ id }) => `${id}`}
                    enableLabel={false}
                    role="application"
                    ariaLabel="A bar chart showing data"
                />
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}