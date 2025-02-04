

function About({path}) {
  return (
    <div>
            <div className="home-section flex justify-around">
        <div className="inline w-[450px]">
          <p className="home-title text-[50px] text-[#3d73e7]">{path}</p>

          <div className=" p-[20px]">
            <p className="inline text-[#646262] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates quibusdam nam modi. Velit autem nobis quas minus nam fugiat voluptates ipsa totam non, excepturi harum vel illo ex sequi.</p>
          </div>

        </div>
        <div className="flex" data-aos="fade-down">

          <img className="box-control w-80 object-cover z-2" src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid" alt="" />

        </div>
      </div>
    </div>
  )
}

export default About