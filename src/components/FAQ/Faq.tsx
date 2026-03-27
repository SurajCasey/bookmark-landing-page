import Button from '../Button'
import './Faq.scss'
import IconArrow from '../../assets/images/icon-arrow.svg?react'
import { useState } from 'react'

const Faq = () => {
        // store the open faq id instead of a boolean
    const [openId, setOpenId] = useState<number | null>(null)

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id) // close if already open
    }

    const faqs = [
        {id:1 , question:"What is Bookmark?" , 
            answer:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."

        },
        {id:2 , question:"How can I request a new browser?" , 
            answer:"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
        },
        {id:3 , question:"Is there a mobile app?" , 
            answer:"  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
        },
        {id:4 , question:"What about other Chromium browsers?" , 
            answer:" Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
        }
    ]



  return (
      <section
        className='faq'
      >
        <div
            className='faq__header'
        >
            <h2
                className='faq__title'
            >Frequently Asked Questions</h2>
            <p
                className='faq__subtitle'
            >
                Here are some of our FAQs. If you have any other questions you’d 
                like answered please feel free to email us.
            </p>
        </div>
       <div className='faq__list'>
            {faqs.map((faq) => (
                <div 
                    className='faq__segment'
                    key={faq.id}
                >
                    <div
                        className='faq__question'
                        onClick={()=> handleToggle(faq.id)}
                    >
                        {faq.question} 
                        <span
                            className={openId === faq.id ? 'faq__question--arrow': ''}
                        > 
                            <IconArrow/>
                        </span>
                    </div>
                    {openId === faq.id && (
                        <p className='faq__answer'>
                            {faq.answer}
                        </p>
                    )}
                </div>
            ))}
        </div>

        <Button
            label='More Info'
            variant='secondary'
            disabled= {false}
        />

    </section>
  )
}

export default Faq