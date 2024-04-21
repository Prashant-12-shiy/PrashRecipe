import React, { useState } from 'react';

export const Faq = () => {
  const [showAns, setShowAns] = useState([]);

  const FAQContent = [
    {
      question: "Q. Can I substitute ingredients in the recipes?",
      answer: "Yes, you can often substitute ingredients in recipes based on personal preferences or dietary restrictions. For example, you can use different types of flour, sweeteners, or vegetables as substitutes. However, keep in mind that substitutions may alter the flavor or texture of the dish."
    },
    {
      question: "Q. How do I store leftover food from the recipes?",
      answer: " Leftover food should be stored properly to maintain freshness and safety. Most cooked dishes can be stored in airtight containers in the refrigerator for up to [insert timeframe]. Some dishes can also be frozen for longer storage. Be sure to label containers with the date and consume leftovers within a reasonable time frame."
    },
    {
      question: "Q. Can I adjust the serving size of the recipes?",
      answer: "Yes, you can adjust the serving size of the recipes based on your needs. Our recipes typically provide serving sizes for a specific number of people, but you can easily scale the ingredients up or down to accommodate more or fewer servings. Just be sure to adjust cooking times accordingly."
    },
    {
      question: "Q.  Can I customize the recipes to suit my taste preferences?",
      answer: " Absolutely! Our recipes serve as a starting point, and we encourage you to get creative and make adjustments to suit your taste preferences. Feel free to experiment with different spices, herbs, and ingredients to personalize the dishes to your liking. Cooking is all about exploration and making dishes your own, so don't be afraid to add your own twist to our recipes!"
    }
  ];

  const toggleAnswer = (index) => {
    setShowAns((prevShowAns) => {
      const updatedShowAns = [...prevShowAns];
      updatedShowAns[index] = !updatedShowAns[index];
      return updatedShowAns;
    });
  };

  return ( 
    <>
      <div className='faq-heading flex flex-col text-center justify-center mt-20 mb-10 gap-4'>
        <h1 className='text-4xl font-bold max-md:text-3xl'>Frequently Asked Question </h1>
        <p className='max-md:text-sm'>With lots of unique blocks, you can easily build a page without coding. <br /> Build your next landing page.</p>
      </div>

      <div className='faq flex flex-col gap-5 w-[70%] m-auto max-md:w-full'>
        {FAQContent.map((content, index) => (
          <div key={index} className='content cursor-pointer'>
            <div onClick={() => toggleAnswer(index)} className='w-[80%] flex flex-col text-white'>
              <div className='flex justify-between items-center'>
                <p className='text-sm'>{content.question}</p>
                <i  className={`bi ${showAns[index] ? 'bi-dash' : 'bi-plus'}`}></i>
              </div>
              <p className={ `${showAns[index] ? '' : 'hidden'} mt-4 ans text-sm`}>{content.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
