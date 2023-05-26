import React , {Fragment,useState} from "react" 
import"../components/about-css/about.css"
const About = () => {
  const [toggleTab ,setToggleTab]=useState(1)
  const toggleState = (index)=>{
    setToggleTab(index)
  }

return (
  <Fragment>
    <section className="about">
      <div className="tabs">
        <div className={toggleTab === 1 ? "single-tab active-tab" : "single-tab"} onClick={() => toggleState(1)}>
          <h2>QUI SOMMME NOUS ?</h2>
        </div>
        <div className={toggleTab === 2 ? "single-tab active-tab" : "single-tab"} onClick={() => toggleState(2)}>
          <h2>NOS MISSIONS  </h2>
        </div>
        <div className={toggleTab === 3 ? "single-tab active-tab" : "single-tab"} onClick={() => toggleState(3)}>
          <h2>Experience </h2>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="tab-content">
            {/*about content */}
            <div className={toggleTab === 1 ? "content active-content" : "content" }>      
              <div className="image-container">
    <img src="https://mail.google.com/mail/u/0?ui=2&ik=d99033470e&attid=0.2&permmsgid=msg-f:1764959683274161251&th=187e657b14713c63&view=att&disp=safe&realattid=f_lh8zptq91"
     alt="description de l'image"
     style={{ width: '20%' }}
      />
  </div>
              <p> SADIM SARL est une société spécialisée dans la vente des machines d’emballage et de conditionnement
                 dans les différentes secteurs industriels tels que ( les presses a huile , ensacheuses ,
                  autoclave, moulin a pain , broyeurs ,
                 unité de fabricationn des sac en papier , certisseuses , four de boulangerie , etc … ) </p>
                 <div className="image-container">
    <img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.15752-9/344522203_984219812729166_5037719800099154936_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jMfjVYz8nTIAX_14SUn&_nc_ht=scontent.ftun16-1.fna&oh=03_AdSum-Fd9dDgAsWbv3--_Izw-DmAdT9tF7yupNCKT81dRw&oe=647AFB11"
     alt="description de l'image"
     style={{ width: '95%' }}
      />
  </div>
            </div>
            {/*skills  content */}
            <div className={toggleTab === 2 ? "content active-content" : "content"}>
            <div className="image-container">
    <img src="https://mail.google.com/mail/u/0?ui=2&ik=d99033470e&attid=0.2&permmsgid=msg-f:1764959683274161251&th=187e657b14713c63&view=att&disp=safe&realattid=f_lh8zptq91"
     alt="description de l'image"
     style={{ width: '20%' }}
      />
  </div>
              <p> SADIM met a votre disposition une équipe hautement qualifié pour l’assistance 
                a la recherche d’un projet innovant , accompagner ,  assister les promoteurs au 
                niveau de la mise en marche et les formations techniques complémentaire, Elle assure aux promoteurs ayant réalisé leur projet un suivi post-creation 
et une assistance pour le dossier de financement . </p>
              
            </div>
            {/* experience content */}
            <div className={toggleTab === 3 ? "content active-content" : "content"}>
              <div className="exp-column">
                <h3>Web Developer</h3>
                <span>2014-2022</span>
                <p>lorem loremsd hjbfhbj hbgbjg bkgbkgf bjkfgkjbfg </p>
              </div>
              <div className="exp-column">
                    <h3>graphic designer  </h3>
                    <span>2015-2022</span>
                    <p>lorem loremsd hjbfhbj hbgbjg bkgbkgf bjkfgkjbfg </p>
                  </div>
                  <div className="exp-column">
                    <h3>photoshop</h3>
                    <span>2017-2022</span>
                    <p>lorem loremsd hjbfhbj hbgbjg bkgbkgf bjkfgkjbfg </p>
                  </div>
                  

                </div>



                </div>
          </div>
        </div>
      </section>

    </Fragment>
  )

  }
export default About

                
