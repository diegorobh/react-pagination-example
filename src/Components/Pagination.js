import React from "react";
import MobileStepper from '@material-ui/core/MobileStepper';

const Pagination = ( { postsPerPage, totalPosts, paginate } ) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i)
  }

  /*<MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />*/

  return(
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a href="!#" onClick={()=>paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
