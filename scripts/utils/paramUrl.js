export const getParamUrl = (param) => {
    const query = window.location.search
    const paramUrl = new URLSearchParams(query)
    return paramUrl.get(param)
}
