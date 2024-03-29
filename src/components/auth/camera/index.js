import { useEffect, useRef, useState } from "react"
import "components/auth/camera/camera.scss"

export default function Camera() {
    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [hasPhoto, setHasPhoto] = useState(false)

    useEffect(() => {
        getVideo()
    }, [videoRef])

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { audio: false, facingMode: 'user' }
            })
            .then(stream => {
                let video = videoRef.current
                video.srcObject = stream
                video.play()
            })
            .catch(err => {
                console.error(err);
            })
    }

    const takePhoto = () => {
        const width = 414
        const height = width / (16 / 9)

        let video = videoRef.current
        let photo = photoRef.current

        photo.width = width
        photo.height = height

        let ctx = photo.getContext('2d')
        ctx.drawImage(video, 0, 0, width, height)
        setHasPhoto(true)

    }

    const closePhoto = () => {
        let photo = photoRef.current
        let ctx = photo.getContext('2d')

        ctx.clearRect(0, 0, photo.width, photo.height)
        setHasPhoto(false)

    }

    return (
        <div className="wrapper">
            <div className="camera">
                <video ref={videoRef} muted autoplay playsinline></video>
                <button onClick={takePhoto}>SNAP!</button>
            </div>
            <div className={'result ' + (hasPhoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
                <button onClick={closePhoto}>CLOSE!</button>
            </div>
        </div>
    )
}
