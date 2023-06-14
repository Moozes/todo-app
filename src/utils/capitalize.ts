export default function capitalize(s: string) {
    if(s === "")
        return "";
    else {
        let[first, ...rest] = s;
        return first.toUpperCase() + rest.join("");
    }
}