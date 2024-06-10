
 
import Link from 'next/link';
import { emptyImage } from '../../../../public/assets/images';

export default function  ServiceChild({services}) {

    const reversedServices = [...services].reverse();

    return (
        <>
            {reversedServices && reversedServices.map((item, index) => (
                <div className="trans_number" key={index}>
                    <Link href={`services/${item.slug}`}>
                        <ul className='transformation_wrapper'  >
                            <li>
                                <h4>{index+1}</h4>
                            </li>
                            <li>
                                <p className="trans_redirecttion">{item.acf.services_title || ""}</p>
                            </li>
                            <li>
                                <img src={item.acf.services_image || emptyImage.src} alt="services image" />
                            </li>
                        </ul>
                    </Link>
                </div>
            ))}
        </>
    );
}

 
