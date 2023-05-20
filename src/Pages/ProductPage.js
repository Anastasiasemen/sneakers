import React, { useState } from 'react';
import classNames from 'classnames';
import BtnCart from '../components/BtnCart';
import { useDispatch, useSelector } from 'react-redux';
import IndexProduct from '../components/indexProduct';


function ProductPage(){
//const { product } = useSelector(({product}) => product)

  return(
    <section className="productPage container">

      {
       // addedProduct.map(obj => <ProductPage name={obj.name} price={obj.price} imageUrl={obj.imageUrl} />)
      }
      <IndexProduct name="Air Jordan 4 Retro Kaws"/>
      <div className="productPage_labels">
        <div className="label">
          <div className="img">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="64" height="64" fill="url(#pattern30)"/>
              <defs>
                <pattern id="pattern30" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_326_58" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_326_58" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE60lEQVR4nO2cz2sdVRTHv5UmFkNfYqAgki5ctLUqInRTpAt3ti+EKLHiVhAXXajLLJ8gWBfpD7vIotR/QKGLQlpIumhXbVVKqSD+QNFnRBf61ERdmGTkhhl4Pdy8d++8e87Mu/d84G7emzPvzHw5M+975t4BFEVRFEVRFMXQBNAGkFnGGoAVALPbWyoitHcQg46PAYypJvxkHuM6gD0qSn0EyQBcBvCQiiInSDdPA/jUss1bD2yliAmC/L5xh2zzN4AD298q4oIYHgfwK9nu2vY3SiWCGF61bHts+xulEkEMV7VK6iXIEQBbZPtDAjkmReYhiK1K3hXIMSkyT0FOku2/BbBLIM9kyDwFeRjAbyTmsECeyZB5CmL4hMS8wZxjUmQlBHmbxFxizjEpshKCPE9ibjHnmBRZCUGeIDHfMeeYDBMlBRkjMevMeSZDi5xY87CqjCB/MueZTHV0yIk1ArlwkMR9wZxrktXxB4BHHWPnSOwSc67RMzFAdRjeI7ELjLkmQWuA6jDcJPGvMOYaPeMAfh+gOswkh39J/BRjvslVRye/hLnyQsl/ZgrDvcMm6Eee8UrAewcss1BMO16p4N5RTHbofmL4n+flTglcHW+SfdzwjFcCVofhCtnHfIl9KAhTHY/kE+S69/Osnt3qqmPW8nd3KJ+lvwjgB0ubm2uYE3UioO8ouCh4DL3Get7MPAfgGZTgxwqSNr8ZyncUfF8DMejYAHABwKjPgdDrrtQIWR11FaQYKz6ifFlRkhMBq6NY+iZ56fUdH7oeCJ3p9xJ4oAm2AlZHndgL4GUAX1kuX2Y9S18WSeA7QoJ0AlZHHZm0rI884xI4T4LOMiXYq5w7kVRHv2mt912CXrOs0ZMWpIU4aZDj/Msl6CgJusuUXGrVUZje7mM1Brgvj1lOEAc2MX4CMIN4oZMtPnMJMu2Ffyx/SUNDxYgdc1P/uuxkC+pFnmNIMBVBGnllUDG2fFYGS3iRWAWZzi+9/Yyh11QkCS8SqyBtx9bJiM9OJbxIqoIs+ooh5UViFaTZR5TzZXYq4UViFaRfD2sTwFPwRMKLxC5Irx6Wc6dX0oukIoith1VqOQS3F0lJkIblVYTecHuRlAQZL9PDkvYiKQkyV6aHJe1FUhFkcpAelqQXiV2QRogelqQXiU2QaY4elqQXiU2QNkcPS9KLpCbI4iBiSHiR2ARpcvSwJL1IbIKw9LAkvUisggTtYUl6kdgFCdbDkvIiKQjSCNHDkvIiKQgyHvq1UJxeJAVB5kJfsji9SOyCTFraJkH++nJ5kVgFaezQw9p0XX5QlRcZdkGmHXtXxTBL2YLA5UWGXZC2hxjLvusKQ3oR88MfAPgZwCqA0zskk4Igm2UWeYb2IqctiZnPYhOk2UeUb8ougw7tRVYtyZnPYhPEZQ3hk2DA14ukJkiv3pV5WUBwfL2I7ZL1fgKCsPSuQniR0VyU1chv6i69K/MSBhY4vIjvO1CGsXfltKizLl7E5x0ow9q7clr2XJfnIq6magrD27tyejFAXZ6LuAqyBGA/hq93tRHika2rF+EYBacEfktiBOnsunoRTkFGANyrwQkdZCyHmPLTz4v8wngA9Oa9D8DnNTixvmMjrwxWMQpmPNvNPmIct/zebgCvA7hd4UvVXMZa/m9qgfOeoSiKoiiKoiiKoigKKuB/8hf7g2lT51MAAAAASUVORK5CYII="/>
              </defs>
            </svg>
          </div>
          <div className="label_text">Оригинальные кроссовки</div>
        </div>
        <div className="label">
          <div className="img">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="64" height="64" fill="url(#pattern31)"/>
              <defs>
                <pattern id="pattern31" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_333_64" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_333_64" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHElEQVR4nO2dS4gdRRSGPydiBCcSNZCZZBTdRJMYhIgu1ZWoC3WydBU0ihkmJjt3uhxwI2YhvlBw4c4BNQoiuEjEKIp5+AhxgoiIiiZqHuCYmVhScEaGsjq3H1XV1X3PBwXDpW/X+fvv6tNVt6oGFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVR2mANMAMcB/4GTE/KeeAE8AxwDR1hK/BzBhfPRC4/AbfQgZYxDGYYKT8Aq8mYmQwuUuryNBlz3An2WWCU/nAF8KKj8SgZ4yZwK6BvXOVo/IuMcZtzXzFd0dmZQIdFZ2cCHRadnQl0WHR2JtBh0dmZQIdFZ2cCHRadnQl0WHR2JtDAOg8A5wIMw9hzfA3sBW6OEWhfMQnKP8CrwJUhA+0rJmH5Erg+VKB9xSQuvwA3hQi0rxinzMkPc02ZAKaBXz11fA+sbxpoXzFOCWHGcq4G3vfU8xFwaZNA+4pJoHMF8LqnrpncAs0Bk0inbQ1vOXVdAO7NLdC2MTV1rpQc8UnDfstvkm+iBdo1TA2dNiF/EfDN60CZfKKGFLeMwxFehwfmEzXEzxMRzCiVT9QQP5861+Yz4EbqTbD4rko+UUP8nHGuzQbqc7tndk9hPlFD/IS+LnvK5hM1xE/o63IJ8KZndPj+2BXniqmoM8Z18eWTP4AbYlecIyYDQyy3efLJ2ykqzg2TiSGWJz3nvztFxTlhMjLkclkWsfz8+1NUnBMmI0Msuzx1bExRcS6YzAyxv7ufdep4KkXFuWAq6jztHL8lQkxvOHV8UCfQrmIq6tzvHP9VBFMedur4sU6gXcVU1Lnd853Yxb4OqyEFjAAftmCKGnIRVrdgihpSoqVsl5ziJno1pAG55kptIaghWWC0heSFUUPywqgheWHUkLwwakhemGE25DqZZfGu7OZ2TsoJ+Ww3cC1pMQ10Fuk5BrwHTJWdt5vaEHuRX5Nt9Qb1Ys/Lery6QqpSR2cVPQuyDdR4LoZsA36vMZxwCpgkPqaizrp67PDKfW0b8pjMMao7tmO/u4O4VNHZVM8isLMtQ7bJBGL3PIfld+ONsimaLZtkEvMRz/EXIreUsjpD6Vks2VKCGrIOOOnZre1RGSUtYkTuwnnPJORx4lBGZ2g9fwJjKQ15xRP8HRW+f6dHxEvEoYzOGHpeSGXIOk/l9k6qyk7nHPORWskgnbH0LAxYGv2/uM7WXC487XnGXqxZFzEiu4SaZcW+14dk1CN8Q0I9RQl+q3PcGd/CFNvxubVExbPO92zCq8tu51yzhDXjOY8hny9NTEugZ1+BGXPOcQdDLt1aLq4qmwLFYAKWkHqOlaxzOuTixiabL6/KwAATUY+7GstXDgGXLZ1gIoApXTBkrmD7i7YNOeRL/CvluXnQk+hjN/HNkSeffSPzZlfJSqaHZHrP6UR6fI8se40/lsfUfy2jCW4StLko1Pq7WdITU887JMB9TTxS8zVxhWz4ZSK+9ratp+y4ViPGPR0pO3xQlSlP73iM9MTSsyCdziS4Qw3zMnxQlrsSDp20ped5Et9V7mDcvDTRQYNxUwWDi2O0R2g9doXtWhIzWTBcfVR6rJtlqHpU/t7jecYaOccDqYOPqGexyh5ZodkR4AeqR8iHpnqsGY/ncGedqhG8fUQ8SH5M1tRjH1P3kAnrJTGW+T+I9piXU76BRNazIAk8ec4ow4T0+vfJcMXStJlvpZO0K+FsEwLg02N72nYEwH5mH09Bbqx/Ac3zPutTHppQAAAAAElFTkSuQmCC"/>
              </defs>
            </svg>
          </div>
          <div className="label_text">Бесплатная доставка</div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage;