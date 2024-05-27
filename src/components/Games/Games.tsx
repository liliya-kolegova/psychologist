import React, { FC } from 'react'
import { Game, Link as OfferLink } from '@/types/mainPage';
import styles from './Games.module.scss';
import Link from 'next/link';
import WorkCard from '../WorkCard/WorkCard';
import FadeUpAnimate from '../FadtUpAnimate/FadtUpAnimate';

type Props = {
  gamesTitle: string;
  games: Game[];
  offerLinks: OfferLink[];
  offerLinksShort: OfferLink[];
}

const Games: FC<Props> = ({
  gamesTitle,
  games,
  offerLinks,
  offerLinksShort
}) => {
  return (
    <section className={styles.games}>
      <div className="container">
        <FadeUpAnimate>
          <h2 className="h2-main mb70">{gamesTitle}</h2>
        </FadeUpAnimate>
        <div className="cards-list">
          {games.map((game) => (
            <WorkCard
              key={game._key}
              type={game.gameType}
              quantity={game.gameQuantity}
              title={game.gameTitle}
              price={game.gamePrice}
            />
          ))}
        </div>
        <div className="offer-links">
          {offerLinks.map((link) => (
            <Link
              href={link.link}
              key={link._key}
              className="offer-link"
            >
              {link.label}
            </Link>
          ))}
          {offerLinksShort.map((link) => (
            <Link
              href={link.link}
              key={link._key}
              className="offer-link__mobile"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Games;