'use client';
export default function Home(){
  return <div className="hero">
    {/* nav ended */}
    <div className="done-full">
      <div className="home-full-div">
      <div className="hey-div">
      <h2>Hey, I&apos;m a Front-End <br /> Devolper</h2>
      <p>Our Landing Page Template Works On All Devices. So You Only Have<br /> To Set It Up Once, And Get Beautiful Results Forever.</p>
      </div>
      <div className="both-buttons">
      <button className="button-cv" onClick={() => "mailto@izmarao99@gmail.com"}>Download CV</button>
      <button className="button-hire" onClick={() => "mailto@izmarao99@gmail.com"}>Hire Me</button>
      </div>
      </div>
    </div>
</div>
}