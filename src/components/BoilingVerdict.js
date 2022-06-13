export default function BoilingVerdict({celsius = 0}){
    if(celsius >= 100) {
        return <p>The water will boil.</p>
    }
    return <p>The water will not boil.</p>
}