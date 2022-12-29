import Head from "next/head";
// import axios from 'axios';

const pricing = ({ faqData, priceData }) => {

  const pricedata =  priceData.map((data) =>           
               <>
              <div className={`col-lg-3 col-md-6 ${(data.id === 2) ? 'mt-4 mt-md-0' : '' } ${(data.id === 3) ? 'mt-4 mt-lg-0' : '' } ${(data.id == 4) ? 'mt-4 mt-lg-0' : '' }`}>
              <div className={`box ${(data.id === 2) ? 'featured' : '' }`} data-aos="fade-up">
                { (data.id === 4) && 
                <span className="advanced">Advanced</span>
                }
                <h3>{ data.name }</h3>
                <h4><sup>$</sup>{ data.price }<span> / month</span></h4>
                <div dangerouslySetInnerHTML = {{ __html: data.details  }}></div>
                <div className="btn-wrap">
                  <a href={data.btn_link} className="btn-buy">{data.btn_label}</a>
                </div>
              </div>
            </div>
              </>
            )

  return (
    <>
    <Head>
    <title>Pricing - Serenity Bootstrap Template</title>
    <meta content="" name="description" />
    <meta content="" name="keywords" />
    </Head>
    
    <main id="main">
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="breadcrumb-hero">
        <div class="container">
          <div class="breadcrumb-hero">
            <h2>Pricing</h2>
            <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
          </div>
        </div>
      </div>
      <div class="container">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Pricing</li>
        </ol>
      </div>
    </section>

    
    <section id="pricing" class="pricing">
      <div class="container">

        <div class="row">

          { pricedata }

        </div>

      </div>
    </section>

    <section id="faq" class="faq section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        {
          faqData.map((data) => 
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up">
            <div className="col-lg-5">
              <i className="bx bx-help-circle"></i>
              <h4>{data.name}</h4>
            </div>
            <div className="col-lg-7">
              <p>
              {data.content}
              </p>
            </div>
          </div>
          )
        }

      </div>
    </section>
    </main>
    </>
  )
}

export default pricing

export async function getServerSideProps(){
  const response = await fetch('http://localhost:3000/pricing'); 
  const data = await response.json();
        
  return {
    props: {
      faqData: data[0].faq,
      priceData: data[0].price,
    }
  }
}
