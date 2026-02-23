export default function AudioPlayer({ src }) {
    return (
        <div>
           <audio autoPlay>
            <source src={src} type="audio/wav" />
           </audio>
        </div>
    )
}