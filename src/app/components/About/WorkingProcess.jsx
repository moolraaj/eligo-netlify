
'use client'
import { useState } from "react";
import { gsap } from "gsap";
import { StepGif, emptyImage, playAgain } from "../../../../public/assets/images";
const WorkingProcess = ({ result }) => {
  const workingProcess = result?.acf?.working_process || [];
  const [currentStep, setCurrentStep] = useState(0);

  const animationStep = () => {
    gsap.to(".step-image-container .image-lower", {
      duration: 0.8,
      x: "-460px",
      y: "-660px",
      opacity: 1,
    });
    gsap.to(".step-image-container .image-upper", {
      duration: 0.8,
      x: "460px",
      y: "660px",
      opacity: 1,
    });
  };

  const handleNextStep = () => {
    if (currentStep + 1 < workingProcess.length) {
      gsap.to(".restart-workprocess.active h3,.restart-workprocess.active h1", {
        duration: 0.8,
        x: window.innerWidth <= 568 ? 0 : "-510px",
        y: window.innerWidth <= 568 ? "-240px" : "-310px",
        opacity: 1,
        onComplete: () => {
          setCurrentStep((prevStep) => prevStep + 1);
        },
      });
      animationStep();
    }
  };

  const handlePlayAgain = () => {
    gsap.to(".restart-workprocess.active h3,.restart-workprocess.active h1", {
      duration: 0.8,
      x: window.innerWidth <= 568 ? 0 : "-510px",
      y: window.innerWidth <= 568 ? "-280px" : "-310px",
      opacity: 1,
      onComplete: () => {
        setCurrentStep(0);
      },
    });
    animationStep();
  };

  return (
    <div className="working-process-container">
      
      {workingProcess && workingProcess.map((step, index) => (
        <div
          key={index}
          className={`process-step ${index === currentStep ? "active" : ""}`}
        >
          <div className="process-steps-content">
            <div className="step-initial">
              <h3 id="step-no">{step.working_process_step}</h3>
              <h1 id="step-tittle">{step.step_title}</h1>
              <p>{step.step_description}</p>
            </div>
            <div className="procees-empty-containers"></div>
            <div className="procees-empty-containers"></div>
            <div className="step-after">
              {index === currentStep && (
                <div className="next-step-content">
                  {index + 1 < workingProcess.length ? (
                    <div className="steps-content-after restart-workprocess active">
                      <div>
                        <h3>
                          {workingProcess[index + 1]
                            ? workingProcess[index + 1].working_process_step
                            : "No Next Step"}
                        </h3>
                      </div>
                      <div></div>
                      <div>
                        <h1>
                          {workingProcess[index + 1]
                            ? workingProcess[index + 1].step_title
                            : "No Title"}
                        </h1>
                      </div>
                      <div>
                        <button onClick={handleNextStep}>
                          <img
                            src={StepGif.src || emptyImage.src}
                            style={{ width: "50px", height: "50px" }}
                            alt="nextStep"
                            className="nextStep"
                          />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="play-again-container">
                      <div className="steps-content-after restart-workprocess active">
                        <div>
                          <h3>Play Again</h3>
                        </div>
                        <div></div>
                        <div>
                          <h1>Restart</h1>
                        </div>
                        <div>
                          <button onClick={handlePlayAgain}>
                            <img
                              src={playAgain.src || emptyImage.src}
                              style={{ width: "40px", height: "40px" }}
                              alt="playAgain"
                              className="playAgain"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {index === currentStep && (
            <div className="step-image-container">
              {step.step_imageupper && (
                <img
                  className="image-upper"
                  src={step.step_imageupper.url || emptyImage.src}
                  alt={`Step ${index + 1}`}
                />
              )}
              {step.step_imagemain && (
                <img
                  className="main-image"
                  src={step.step_imagemain.url || emptyImage.src}
                  alt={`Step ${index + 1}`}
                />
              )}

              {step.step_imagelower && (
                <img
                  className="image-lower"
                  src={step.step_imagelower.url || emptyImage.src}
                  alt={`Step ${index + 1}`}
                />
              )}
            </div>
          )}
        </div>
      ))}
      <div className="working_bottom_rurlar_bar">
        <div className="working_bottom_dot"></div>
        <div className="working_bottom_bar"></div>
        <div className="working_bottom_dot"></div>
        <div className="working_bottom_bar"></div>
        <div className="working_bottom_dot"></div>
        <div className="working_bottom_bar"></div>
      </div>
    </div>
  );
};

export default WorkingProcess;
