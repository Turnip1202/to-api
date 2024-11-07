
export const formatConfig = (data:Record<string, any>[])=>
    data.map((config) =>
        {
            const arr =  Object.keys(config).map((key) => {
                // console.log(`${key}: ${config[key]}`);
                return config[key];
            })
            return arr.at(0);
        }

    )
