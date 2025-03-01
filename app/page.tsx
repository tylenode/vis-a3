import Image from 'next/image'

// Assets
import covidSpiral from 'app/assets/covid-spiral.png';
import sketch1 from 'app/assets/sketch1.png';
import sketch2 from 'app/assets/sketch2.png';
import sketch3 from 'app/assets/sketch3.png';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Re-designing The New York Times' Pandemic Visualization
      </h1>
      <div className="text">By Ian Lee</div>
      <br></br>

      <p className="mb-4 normal">
        {`
        Featured in a New York Times article by Dr. Jeffrey Shaman, a renowned  scientist at Columbia University,
        the visualization below presents patterns of new COVID-19 cases from early 2020 to early 2022. 
        It maps the evolution of the pandemics radially, with each quadrant representing a quarter of the year and time progressing clockwise.
        We will explore the design trade-offs considered in this visualization and offer a re-design addressing pitfalls.`}
      </p>

      <div className="big">
        Original Design
      </div>
      <hr className="solid-line"></hr>

      <Image src={covidSpiral} alt="Description of image"  
      
        style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}/>
      
      <div className="my-8">
          <h2><b>Observations</b></h2>
          <hr className="solid-line"></hr>

          <ul className="normal">
            <li>Huge increase (approximately 50%) in new cases from late 2021 to early 2022, which correlates precisely to the rise of the omicron variant.</li>
          </ul>


          <ul className="normal">
            <li>The pandemic reported cases in the US began seemingly at around March 2022. Based on the red coloring.</li>
          </ul>


          <ul className="normal">
            <li>During the summers, new cases trough, and this visualization highlights the seasonality that new cases tend to thin during summer months. 
            For example, the number of cases between 2021 July and later 2021 winter months is quite significant.</li>
          </ul>
      </div>

      <div className="my-8">
          <h2><b>Intended Audience</b></h2>
          <hr className="solid-line"></hr>
          <div className="normal">
          This original visualization is intended for the general public. Instead of focusing on specific numbers, averages, or standard deviations, this original visualization abstracts the data into trends. This approach makes it easier for the average American to digest and comprehend the information about the pandemic's spread.
          </div>
      </div>

      <div className="my-8">
          <h2><b>Publication Medium</b></h2>
          <hr className="solid-line"></hr>
          <div className="normal">
          By publishing as a part of an opinion article written by Dr. Jefferey Shaman,  an infectious disease modeler and epidemiologist at Columbia University whose team built one of the first models of COVID-19, this visualization gains credibility and trust of the scientist community as well as the general public who values science and objectivity in data.
          </div>
      </div>

      <div className="my-8">
          <h2><b>Design Tradeoffs and Constraints</b></h2>
          <hr className="solid-line"></hr>


          <ul className="normal">
            <li>Strengths of this visualization include simplifying the axes, which prioritizes the representation of trends over precise months or new case numbers. In additions, the use of vivid color red correlates with danger, which aligns well with the connotation of new cases in a pandemics.</li>
          </ul>

          <ul className="normal">
            <li>Constraints, however, include the use of a radial layout to represent time, which deviates from the linear representation the general public is accustomed to, such as putting time strictly on the x-axis in a traditional bar graph or scatter plot. Also, there is a perceptual lack of radial symmetry at the lower left, third quadrant.. This is directly related to a strong limit of this visualization: scalability. What if a specific interval has an extreme surge of new cases? The radial presentation forces the designer to add space in-between swirls to ensure representation clarity, which contributes to the perceptual confusion. Additionally, I almost missed the 7-day average label because it was not at the legends, which is a more common area to place metadata or label descriptions.</li>
          </ul>

          <ul className="normal">
            <li>Deltas include: adding a subtext under legend as a description, such as: 'The thickness of the graph represents the number of new cases; the thicker the line, the more new cases at that time.' This helps guide readers through the narrative of the graph.</li>
          </ul>

          <ul className="normal">
            <li>Overall, the tradeoffs of this original design prioritizes trend discovery and visual novelty over data precision and ease of quantitative interpretation for readers. These deliberate design decisions provide opportunities for redesign.</li>
          </ul>
      </div>

      <div className="big">
        Sketches
      </div>
      <hr className="solid-line"></hr>

      <div>
        <figcaption className="text">Sketch 1: Cross-Year Volume Comparison</figcaption>
        <Image src={sketch1} alt="Cross-Year COVID New Cases Volume Visualization"   
          style={{
          width: '80%',
          height: '70%',
          objectFit: 'cover'
        }}/>
        <ul className="normal">
            <li>
              <span className="u">Rationale</span>: The original visualization "loops" time radially. This adds frictions to the reading experience.
              For example, when trying to pinpoint the time of a specific datapoint, the reader has to first identify
              which loop they are in, then identify the quadrant, then identify the month from the twelve radial axes,
              each of which has varied length. Inspired to address these frictions, I made this sketch so user can easily answer
              the question "Which year", "which month", and "how many new cases" at a glance instead of jumping through simple,
              but optimizable logic loops to get to the answer.
            </li>
            <li>
              <span className="u">Strength</span>: What I really like about this sketch is the emphasis on <b className="green">consistent representation</b>. I made the design choice
              to have a x-axis representing number of new cases per year. This allows <b className="blue">modularity</b> in the reading experience. As a reader,
              I can isolate and lock in on one year's data to understand that year's pattern. In addition, I ensured the maximum of
              x-axes across years is <i>consistent</i>. This gives a big-picture context as the reader is locking into one year,
              and additionally I exclusively label each year's max along that year's x-axis, further enriching the context
              to help reader navigate the broader cross-year pattern of the pandemic. I also like how this sketch has space
              to denote the events in the chart, adding a <b className="orange">story-telling</b> element to this visualization.
            </li>

            <li>
              <span className="u">Deltas</span>: This design sacrifices horizontal scalability. As there are more years,
              the graph grows wider, which depending on the display size of the device, can be challenging to present fully
              and must resort to scrolling.
            </li>

            <li>
              <span className="u">Next sketch</span>: Based on the horizontaly scalability limitation, I would like to explore
              a visualization form where the width is compact and constant, and the readers can see the data more explicit and quantitatively.
            </li>
        </ul>
      </div>

      <br></br>
      <div>
      <figcaption className="text">Sketch 2: Seasonal Tabular View</figcaption>
      <Image src={sketch2} alt="Description of image"   
        style={{
        width: '80%',
        height: '70%',
        objectFit: 'cover'
      }}/>
      <ul className="normal">
          <li>
            <span className="u">Rationale</span>: From my last sketch, I wanted to present a more compact visualization that can get the
            statistics directly to the readers, i.e. conveying the new cases numbers most frictionlessly. This inspires this tabular approach.
            Unlike the original visualization, which grouped months by quarters, I grouped the months by season to emphasize the seasonality
            in how the pandemic spread. I also aggregated the data by month instead of on presenting data on a daily basis, since readers
            will likely be more interested in the macro-pattern than, say, what the number of new cases is on a specific day in Feburary.
          </li>
          <li>
            <span className="u">Strength</span>: I really like the addition of seasonal symbols on the left to convey change of seasons.
            This is almost like telling a story of how the pandemics changes over seasons, echoing back to our <b className="orange">story-telling</b> element.
            The listing of months in a table is actually quite perfect, just like a calendar, borrowing from a concept almost all readers
            are familiar with. Also, this helps immensively in answering the question "How many additional new cases are different in 2020 vs. 2021 for the same
            month?"
          </li>

          <li>
            <span className="u">Deltas</span>: This design uses mixed units "K" and "M" to abbreviate the representation of the number of new cases. This can adpot
            a more <b className="green">consistent representation</b> to help users ground themself in a specific scale. In fact, I think the repetition of years
            can introduce data redundancy. Also, this tabular view doesn't give an easy way to immediately gauge a sense of change in # new cases across months,
            since the user would likely read horizontally and compare three months max at a time (a season at a time).
          </li>

          <li>
            <span className="u">Next sketch</span>: I want to explore another way to represent cross-year difference, minimizing data redundancy like in this sketch
            while also making it very esay to compare all the months across the year at a time, i.e concise data representation while also having the broder scope
            and context like in the first sketch.
          </li>
      </ul>

      </div>

      <br></br>
      <div>
      <figcaption className="text">Sketch 3: Multi-year Step Plot By Month</figcaption>
      <Image src={sketch3} alt="Description of image"   
        style={{
        width: '80%',
        height: '70%',
        objectFit: 'cover'
      }}/>
        <ul className="normal">
          <li>
            <span className="u">Rationale</span>: Based on my previous two sketches, I decided brevity, numerical data representation (for quantitative comparison),
            and temporal context (able to smoothly compare cross-month, cross-year without much deducing) are huge in crafting what I consider a high-quality visualizations.
            Hence, I decided to explore the use of a step chart. Using a step as a logical unit for comparison.
          </li>
          <li>
            <span className="u">Strength</span>: The <b className='purple'>interpretational flexibility</b> is huge in this design. As readers, we can read this visuaization
            horizontally to get cross-month changes in new cases (along with the concret numbers) for a single year, or cross-year changes by looking vertically.
            The use of only one pair of x-y axes is great, optimizing the ease of information intake and helping the readers to focus on the data, which sits
            at the center of the visualization, instead of spiraling like in the original. The <b className="green">consistent representation</b> in the data unit is great, too.
          </li>

          <li>
            <span className="u">Deltas</span>: A delta is the unit magnitude. What if the yearly datasets vary widely in the number of new cases? Because we only
            have one y-axis, we must update the tickmarks to accomodate both the min and max, i.e. both ends of the spectrum in the data. Additionally, two years can share
            similar number of cases for the same month, allowing the possibility of visual overlap between two years worth of data, though this can is trivial because the graph is continuous and readers should quite easily
            pinpoint the precise datapoint of a year (just follow the step).
          </li>
      </ul>
      </div>

    <div className="big">
      Final Design
    </div>
    <hr className="solid-line"></hr>

    </section>
  )
}
