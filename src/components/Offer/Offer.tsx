import { Link as OfferLink } from '@/types/mainPage';
import React, { FC } from 'react'
import styles from './Offer.module.scss'
import Link from 'next/link';

type Props = {
  offerTitle: string;
  offerDescription: string;
  offerLinks: OfferLink[];
  offerLinksShort: OfferLink[];
}

const Offer: FC<Props> = ({ offerTitle, offerDescription, offerLinks, offerLinksShort }) => {
  // console.log("offerLinksShort", offerLinksShort);
  return (
    <section className={styles.offer}>
      <svg className={styles.decor} width="1920" height="550" viewBox="0 0 1920 550" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 192.463C8.98487 159.079 19.3982 133.705 42.9167 107.725C74.9569 72.3307 116.12 36.1959 160.278 16.8537C171.562 11.9107 183.592 7.55597 196.25 8.90946C228.079 12.3129 217.803 51.0597 213.333 71.7666C201.724 125.556 180.135 176.685 167.083 230.094C162.53 248.727 147.558 303.237 178.056 314.833C200.62 323.411 234.268 302.573 248.611 291.697C294.651 256.783 333.518 205.516 356.25 152.463C366.771 127.908 380.838 82.2927 352.778 61.1742C322.957 38.7307 272.878 53.3796 242.778 64.5192C215.163 74.7389 173.055 95.064 169.444 130.303C164.073 182.735 222.411 212.182 263.056 222.01C344.916 241.804 436.916 226.181 504.444 173.787C540.538 145.783 598.058 72.4346 573.75 20.1987C560.304 -8.69469 528.324 1.33399 507.083 9.88507C446.537 34.2597 396.64 89.8921 367.222 147.028C343.032 194.011 328.839 254.225 358.194 302.428C382.859 342.929 432.85 359.839 478.056 359.711C607.571 359.343 679.167 233.24 710.556 123.334C714.008 111.247 716.222 98.8175 718.194 86.4007C719.485 78.2792 723.2 58.9072 715.556 61.8711C711.921 63.2804 709.675 67.1284 707.5 70.3728C700.114 81.3882 661.808 150.126 661.667 150.373C588.966 277.244 516.083 413.014 414.722 519.71C407.364 527.456 370.262 571.274 362.222 534.484C352.78 491.277 366.087 440.684 386.528 403.195C434.758 314.736 514.924 238.73 591.944 176.017C654.068 125.434 726.523 75.4553 805.833 56.8537C833.482 50.3688 877.222 47.0328 897.5 74.2753C923.172 108.764 911.51 170.431 906.389 207.794C900.237 252.682 893.516 281.052 883.056 324.589C875.171 357.404 858.889 397.635 858.889 432.184C858.889 464.409 907.068 425.266 909.722 423.404C952.467 393.412 990.313 357.149 1025.56 318.735C1034.6 308.879 1051.15 289.008 1060.56 276.923C1061.99 275.084 1063.54 273.296 1064.58 271.209C1066.79 266.772 1057.44 278.087 1054.17 281.801C1048.82 287.861 994.877 353.364 1009.86 356.644C1035.93 362.351 1076.56 349.654 1098.89 336.575C1103.98 333.593 1114.37 321.548 1108.47 321.662C1090.29 322.013 1067.34 339.515 1054.17 349.676C1043.94 357.568 1016.25 378.127 1018.33 395.111C1020.37 411.698 1053.92 407.997 1062.5 405.982C1115.09 393.631 1135.91 333.187 1141.39 285.286C1144.72 256.171 1122.26 319.033 1121.67 320.826C1116.71 335.848 1096.26 389.229 1124.31 394.972C1135.55 397.274 1149.36 395.743 1160.56 395.669C1186.67 395.496 1213.46 396.213 1239.31 391.766C1266.76 387.043 1309.11 369.015 1309.58 335.042C1310.02 304.259 1266.81 335.038 1258.61 342.428C1242.55 356.898 1194.77 421.489 1227.5 441.104C1259.26 460.134 1308.66 460.282 1342.78 456.296C1437.5 445.23 1523.94 402.872 1607.5 359.432C1682.91 320.231 1755.03 275.021 1829.58 234.275C1859.83 217.744 1888.66 207.838 1920 194.972" stroke="#D0C6BE" strokeLinecap="round" />
      </svg>
      <div className="container-middle">
        <div className={styles.offerContent}>
          <h2 className={styles.title}>{offerTitle}</h2>
        </div>
      </div>
      <div className={styles.shortBlock}>
        <p className={styles.description}>{offerDescription}</p>
        <div className={styles.links}>
          {offerLinks.map((link) => (
            <Link
              href={link.link}
              key={link._key}
              className={styles.link}
            >
              {link.label}
            </Link>
          ))}
          {offerLinksShort.map((link) => (
            <Link
              href={link.link}
              key={link._key}
              className={styles.linkShort}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offer