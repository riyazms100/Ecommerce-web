import product_rt_1 from '../assets/product_rt_1.png'
import product_rt_2 from '../assets/product_rt_2.png'
import product_rt_3 from '../assets/product_rt_3.png'
import product_rt_4 from '../assets/product_rt_4.png'
import {MdStar} from "react-icons/md"

const ProductDisplay = (props) => {

    const product = props;;

  return (
    <section >
        <div className="flex flex-col gap-14 xl:flex-row">
            <div className="flex gap-x-2">
                <div className="flex flex-col gap-[7px] flex-wrap">
                    <img src={product_rt_1} alt="prdctImg" className='max-h-[99px]' />
                    <img src={product_rt_2} alt="prdctImg" className='max-h-[99px]' />
                    <img src={product_rt_3} alt="prdctImg" className='max-h-[99px]' />
                    <img src={product_rt_4} alt="prdctImg" className='max-h-[99px]' />
                </div>
                <div>
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="flex-col flex">
                <h3>{product.name}</h3>
                <div>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <p>(111)</p>
                </div>
                <div>
                    <div>{product.old_price}</div>
                    <div>{product.new_price}</div>
                </div>
                <div>
                    <h4>Select Size</h4>
                    <div className="flex gap-3 my-3">
                        <div className="ring-2 ring-slate-900 h-10 w-10 flexcenter cursor-pointer">S</div>
                        <div className="ring-2 ring-slate-900/10 h-10 w-10 flexcenter cursor-pointer">M</div>
                        <div className="ring-2 ring-slate-900/10 h-10 w-10 flexcenter cursor-pointer">L</div>
                        <div className="ring-2 ring-slate-900/10 h-10 w-10 flexcenter cursor-pointer">XL</div>
                    </div>
                    <div>
                        <button>Add to cart</button>
                        <button>Buy it now</button>
                    </div>
                    <p><Span>Category :</Span> Women | Jacket | Winter</p>
                    <p><Span>Tags :</Span> Modern | Latest </p>

                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDisplay