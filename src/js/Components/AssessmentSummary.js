import inRange from '../helpers/inRange';

export default function AssessmentSummary() {
  const summaryReview = document.querySelector('#summaryReview');
  const recommendations = document.querySelector('#recommendations');
  const sectionTitle = document.querySelector('.section-title');
  const contactData = JSON.parse(localStorage.getItem('formSaver-initialInfo'));
  let i = 0;

  //Get data from local storage
  const classification = JSON.parse(
    localStorage.getItem('formSaver-airportClassification')
  );

  // Setup classification section title
  const airportKey = Object.keys(classification);
  const key = airportKey.toString();
  let titleText = '';

  //Get data from local storage
  const assessmentScores = JSON.parse(
    localStorage.getItem(
      'formSaver-classification-airport-' + Object.values(classification)
    )
  );

  switch (key) {
    case 'classificationshub':
      titleText = 'Hub';
      break;
    case 'classificationsurban':
      titleText = 'Reliever/General Aviation Urban';
      break;
    case 'classificationssuburban':
      titleText = 'Reliever/General Aviation Suburban';
      break;
    case 'classificationsrural':
      titleText = 'General Aviation Rural';
      break;

    default:
      break;
  }
  // create text element for classification section title
  const classificationText = document.createTextNode(titleText);
  sectionTitle.appendChild(classificationText);

  /**
   * @function assessmentScore
   * @param  {string} keyFilter     Filter out object keys based on string
   * @param  {number} weightedValue weighted value to caluclate assessment score in each area
   * @return {type} {description}
   */
  function assessmentScore(keyFilter, weightedValue) {
    const awarenessObj = Object.fromEntries(
      Object.entries(assessmentScores).filter(([key]) =>
        key.includes(keyFilter)
      )
    );
    const questionsDivisor = Object.keys(awarenessObj).length * 2;

    let score = 0;
    Object.values(awarenessObj).forEach(function (value) {
      const scoreNum = parseInt(value);
      score = score + scoreNum;
    });

    const percentage = Math.round(
      (score / questionsDivisor) * weightedValue * 100
    );

    return percentage;
  }

  const awarenessScore = assessmentScore('q1', 0.2);
  const readinessScore = assessmentScore('q2', 0.45);
  const infrastructureScore = assessmentScore('q3', 0.35);
  const overallPercentage =
    awarenessScore + readinessScore + infrastructureScore;

  //Calcualte overall score
  function overallScore() {
    let finalPercent = '';

    if (inRange(overallPercentage, 1, 24)) {
      finalPercent += `<div class="bg-error"><span class="block p-2 font-bold text-3xl leading-none">${overallPercentage}%</span></div>`;
    } else if (inRange(overallPercentage, 25, 49)) {
      finalPercent += `<div class="bg-orange"><span class="block p-2 font-bold text-3xl leading-none">${overallPercentage}%</span></div>`;
    } else if (inRange(overallPercentage, 50, 74)) {
      finalPercent += `<div class=" bg-yellow"><span class="block p-2 font-bold text-3xl leading-none">${overallPercentage}%</span></div>`;
    } else if (inRange(overallPercentage, 75, 100)) {
      finalPercent += `<div class="bg-green"><span class="block p-2 font-bold text-3xl leading-none">${overallPercentage}%</span></div>`;
    }

    return finalPercent;
  }

  let summaryReviewHTML = `
    <table class="styled-table max-w-4xl mr-auto mt-12">
      <tr>
        <th scope="col" class="bg-light">Readiness Components (weighted %)</th>
        <th scope="col" class="bg-light">Airport Readiness (%)</th>
      </tr>
      <tr>
        <th scope="row" class="text-center bg-transparent">Awareness of Urban Air Mobility(20%)</th>
        <td class="border-r border-b border-light text-center font-semibold text-lg">
          <div data-level>
          ${assessmentScore('q1', 0.2)}%
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row" class="text-center bg-transparent">Readiness for Urban Air Mobility(45%)</th>
        <td class="border-r border-b border-light text-center font-semibold text-lg">
          <div data-level>
          ${assessmentScore('q2', 0.45)}%
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row" class="text-center bg-transparent">Infrastructure for Urban Air Mobility(35%)</th>
        <td class="border-r border-b border-light text-center font-semibold text-lg">
          <div data-level>
          ${assessmentScore('q3', 0.35)}%
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row" class="text-center bg-light">Overall Urban Air Mobility Readiness Level</th>
        <td class="mx-auto bg-light border-r border-b border-light text-center">
          ${overallScore()}
        </td>
      </tr>
    </table>
  `;

  summaryReview.innerHTML = summaryReviewHTML;

  let recommendationsHTML = '';

  //No Go recommendations
  if (overallPercentage >= 0 && overallPercentage <= 24) {
    recommendationsHTML += `
   <div class="lg:flex justify-between mt-12">
      <div class="lg:w-1/2 lg:mr-8">
      <h3  class="h2">Level 1: No-Go</h3>
        <p>This level of readiness implies you may not be ready at this time because of:</p>
        <ol class="list-lower-alpha two-column">
          <li>Insufficient interest </li>
          <li>Insufficient capability</li>
          <li>Insufficient resources</li>
          <li>Inability to overcome barriers</li>
          <li>Inability to mitigate risks to an acceptable level</li>
          <li>Some or all of the above</li>
        </ol>
        <p>While the final decision rests with multiple decision-makers, it is essential to understand the consequences and ramifications of not advancing or preparing for UAM integration.  There may be multiple reasons, including little to no demand for services, distance from activity centers, political or community resistance, limited funding, lack of a workforce to support UAM initiatives, or other reasons. A “No-go” may be a viable solution for some airports as it may not be feasible to incorporate UAM at this time.  If it is determined that the assessment level is a No-go due to lack of information, it will be prudent to study the associated areas in the guidance document.  The guidance document will inform ways to improve readiness and understand how technology is changing to assist with future preparation if/when there is a decision to move forward with UAM goals.</p>
        <a href="../pdfs/ACRP0350_Final_Draft_Report_Clean.pdf" target="_blank" class="button inline-block no-print pdf-button">View PDF Guidebook</a>
      </div>
      <table class="styled-table lg:w-1/2 mt-0">
        <tr>
          <th scope="col" class="w-5/12 bg-light">Airport Readiness (%)</th>
          <th scope="col" class="w-7/12 bg-light">Airport Readiness Level</th>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-green">75%-100%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 4: Go-Now</td>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-yellow">50%-75%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 3: Slow-Go</td>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-orange">25%-50%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 2: Not-Now</td>
        </tr>
        <tr>
          <th scope="row"><span class="percentages border-error">0%-25%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 1: No-Go</td>
        </tr>
      </table>
    </div>
    `;
  }

  // Not Now recommendations
  if (overallPercentage >= 25 && overallPercentage <= 49) {
    recommendationsHTML += `
    <div class="lg:flex justify-between mt-12">
      <div class="lg:w-1/2 lg:mr-8">
      <h3 class="h2">Level 2: Not-Now</h3>
        <p>This level of readiness implies it may not be the most prudent time to incorporate UAM.  There may be more actions to take before the airport is ready. It will be beneficial to continue to monitor the progress of UAM development and applications elsewhere.  It will be in the best interest of an airport to read the sections on the guidance document to understand the factors that led to a “not-now” decision to increase their readiness and revisit the decision when circumstances warrant it. The airports should also include a discussion of the consequences and ramifications of not proceeding with UAM initiatives at this time and an indication of when revisiting would be prudent.</p>
        <a href="../pdfs/ACRP0350_Final_Draft_Report_Clean.pdf" target="_blank" class="button inline-block no-print pdf-button">View PDF Guidebook</a>
      </div>
      <table class="styled-table lg:w-1/2 mt-0">
        <tr>
          <th scope="col" class="w-5/12 bg-light">Airport Readiness (%)</th>
          <th scope="col" class="w-7/12 bg-light"> Airport Readiness Level</th>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-green">75%-100%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 4: Go-Now</td>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-yellow">50%-75%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 3: Slow-Go</td>
        </tr>
        <tr>
          <th scope="row"><span class="percentages border-orange">25%-50%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 2: Not-Now</td>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-error">0%-25%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 1: No-Go</td>
        </tr>
      </table>
    </div>
    `;
  }

  // Slow Go recommendations
  if (overallPercentage >= 50 && overallPercentage <= 74) {
    recommendationsHTML += `
   <div class="lg:flex justify-between mt-12">
      <div class="lg:w-1/2 lg:mr-8">
      <h3 class="h2">Level 3: Slow-Go</h3>
        <p>This level of readiness implies to advance toward UAM integration but for some combination of the initiatives. Do so at an “evolutionary” pace by naturally incorporating areas that best benefit the airport.  For example, upgrading the electrical grid may be beneficial to support electrification efforts for future vehicles and ground support equipment, which also supports UAM. Other beneficial areas are identifying ways to diversify revenue sources to prepare for less revenue from petrol-based fuel sources.  Ideally, integrate the use cases into the airport’s practices as it becomes relatively mainstreamed and prudent for the airport to adopt to mitigate risk. Include a discussion of the consequences and ramifications of a “slow-go” decision.</p>
        <a href="../pdfs/ACRP0350_Final_Draft_Report_Clean.pdf" target="_blank" class="button inline-block no-print pdf-button">View PDF Guidebook</a>
      </div>
      <table class="styled-table lg:w-1/2 mt-0">
        <tr>
          <th scope="col" class="w-5/12 bg-light">Airport Readiness (%)</th>
          <th scope="col" class="w-7/12 bg-light"> Airport Readiness Level</th>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-green">75%-100%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 4: Go-Now</td>
        </tr>
        <tr>
          <th scope="row"><span class="percentages border-yellow">50%-75%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 3: Slow-Go</td>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-orange">25%-50%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 2: Not-Now</td>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-error">0%-25%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 1: No-Go</td>
        </tr>
      </table>
    </div>
    `;
  }

  // Go Now recommendations
  if (overallPercentage >= 75 && overallPercentage <= 100) {
    recommendationsHTML += `
   <div class="lg:flex justify-between mt-12">
      <div class="lg:w-1/2 lg:mr-8">
          <h3 class="h2">Level 4: Go-Now</h3>
        <p>This level of readiness implies that it may be beneficial to expeditiously advance with UAM initiatives for the airport, including an expedited testing and evaluation phase, potentially in collaboration with others interested in advancing within the airport sector.  Even with a Go-now readiness level, it may not be prudent to incorporate all use cases at one time.  It will be beneficial to look at each use case individually and select the best matches for now and the future.  When assessing each use case, ensure to evaluate both the impacts and opportunities for each decision.  The next step will be to create a plan for an efficient way to incorporate these use cases into the airport as directed from the guidance document.</p>
        <a href="../pdfs/ACRP0350_Final_Draft_Report_Clean.pdf" target="_blank" class="button inline-block no-print pdf-button">View PDF Guidebook</a>
      </div>
            <table class="styled-table mt-0 lg:w-1/2">
        <tr>
          <th scope="col" class="w-5/12 bg-light">Airport Readiness (%)</th>
          <th scope="col" class="w-7/12 bg-light"> Airport Readiness Level</th>
        </tr>
        <tr>
          <th scope="row"><span class="percentages border-green">75%-100%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 4: Go-Now</td>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-yellow">50%-75%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 3: Slow-Go</td>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-orange">25%-50%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 2: Not-Now</td>
        </tr>
        <tr class="opacity-30">
          <th scope="row"><span class="percentages border-error">0%-25%</span></th>
          <td class="font-bold pl-3 border-b border-light text-center">Level 1: No-Go</td>
        </tr>
      </table>
    </div>
    `;
  }

  recommendations.innerHTML = recommendationsHTML;
}
