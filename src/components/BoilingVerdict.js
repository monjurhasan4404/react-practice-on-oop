export default function BoilingVerdict ({celsius=0}){
    if(celsius >= 100){
        return <p> Water Is boiling.</p>
    }
    return <p> Water Would not boil.</p>
}