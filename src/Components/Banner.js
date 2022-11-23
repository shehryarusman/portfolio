import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "WOO"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random()*100)
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(()=> {
            tick()
        }, delta)
        return () => {clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum%toRotate.length
        let fullText =toRotate[i]
        let updatedText = isDeleting? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)
        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => (prevDelta*0.75))
        }

        if(!isDeleting && updatedText==fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText==''){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(500)
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio!</span>
                        <h1>{`Hi I am Shehryar Usman `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas quis. Mauris commodo quis imperdiet massa tincidunt. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Blandit massa enim nec dui nunc mattis. Lacus sed viverra tellus in hac habitasse. Tincidunt vitae semper quis lectus. In dictum non consectetur a erat nam. Blandit aliquam etiam erat velit scelerisque in dictum. Arcu non sodales neque sodales ut etiam sit amet. Est velit egestas dui id ornare arcu odio ut. Pellentesque nec nam aliquam sem et. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. At elementum eu facilisis sed odio morbi quis. Tellus integer feugiat scelerisque varius morbi. Turpis massa tincidunt dui ut.</p>
                        <button onClick={()=> console.log('connect')}>Let's Connect! <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}