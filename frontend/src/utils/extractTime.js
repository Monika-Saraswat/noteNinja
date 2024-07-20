export function extractTime(dateString){
    const date = new Date(dateString);
    const hrs = padZero(date.getHours());
    const min = padZero(date.getMinutes());
    return `${hrs}:${min}`;
}

function padZero(n){
    return n.toString().padStart(2,"0");
}