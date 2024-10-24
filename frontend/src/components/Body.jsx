import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Body = () => {
    return (
        <>
            <Navbar />
            <div className="starter">
                <div className="gs">
                    <h1 className="heading">Start Your Blogging Journey Today</h1>
                    <p className="headercaption">
                        Share your ideas, tell a story, and connect with others. Our platform makes it easy to create a blog that reflects your unique voice and style. With intuitive tools and a supportive community.
                    </p>
                    <button className="getstarted">
                        <a href="loginpage.html">Get Started</a>
                    </button>
                </div>
                <div className="gt"></div>
            </div>


            <section>
                <h1><u>Trending Blogs</u></h1>
            </section>
            <div class="main">
                <div class="firstblog">
                    <h2>What is a Blog ?</h2>
                    {/* <img src="blog1.png" alt="blog1"> */}
                        <p>
                            A blog, short for weblog, is a frequently updated web page used for personal commentary or business content. Blogs are often interactive and include sections at the bottom of individual blog posts where readers can leave comments.
                            Most are written in a conversational...<a href="#">Read more</a>
                        </p>
                </div>
                <div class="secondblog">
                    <h2>Banking Trends</h2>
                    {/* <img src="blog2.png" alt="blog2"> */}
                        <p>
                            The World Bank Group assigns the worlds economies[1] to four income groups: low, lower-middle, upper-middle, and high. The classifications are updated each year on July 1, based on the GNI per capita of the previous calendar year. GNI measures are expressed in United States dollars[2] using conversion factors derived according to the Atlas method, which in its current form was introduced in 1989[3]...<a href="#">Read More</a>
                        </p>
                </div>
                <div class="sixthblog">
                    <h2>Drugs are killing us ?</h2>
                    {/* <img src="blog6.webp" alt="blog6"> */}
                        <p>
                            Once I started getting into how the US Food and Drugs Administration (US FDA) approves drugs, I began to understand that it reviews data submitted by companies in order to get approval. These companies have to submit data that shows the drugs are effective and safe. I began hearing that there was an investigation ...<a href="#">Read More</a> </p>
                </div>
            </div>
            <div class="main1">
                <div class="blog3">
                    <h2>Post-Covid</h2>
                    {/* <img src="blog3.webp" alt="blog3"> */}
                        <p>
                            New data show that 35% of the global population could not afford a healthy diet in 2022. While this share has decreased since the peak of the COVID-19 pandemic in 2020 when 38% were affected, recovery has been slower in lower-income economies. guidelines — was $3.96 per person per day in 2022.....<a href="#">Read More</a>

                        </p>
                </div>
                <div class="blog4">
                    <h2>AI </h2>
                    {/* <img src="blog4.avif" alt="blog4"> */}
                        <p>
                            The world has been riding the AI wave and this groundbreaking technology has been boosting efficiency across domains and sectors. Now, it also has the potential to improve conventional site searches. Leveraging Natural Language Processing (NLP) and machine learning (ML), the platform learns from information that the users are entering in the search bar to generate the most appropriate search results.
                            ...<a href="#">Read More</a>
                        </p>
                </div>
                <div class="blog5">
                    <h2>Aviation Trouble?</h2>
                    {/* <img src="blog5.avif" alt="blog5"> */}
                        <p>
                            The abrupt cancellation of all flights in May 2023 has caused significant inconvenience to thousands of customers, leading to widespread disappointment and frustration. The possible job losses have also added to employees' distress, leaving them uncertain about their future. The airline's bankruptcy filing further compounds the situation as Go First's assets fall short of covering its liabilities.
                            ...<a href="#">Read More</a>
                        </p>
                </div>
            </div>
            <div class="main2">
                <button class="rm">Read More</button>
            </div>

            <Footer />
        </>
    )
}

export default Body