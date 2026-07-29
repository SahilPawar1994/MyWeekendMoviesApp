import styles from "./MovieCard.module.css";
import { Movie } from "@/interfaces/Movie";

interface Props {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
    return (
        <div className={styles.card}>

            <img
                src={movie.poster}
                alt={movie.title}
                className={styles.poster}
            />

            <div className={styles.content}>

                <h2>{movie.title}</h2>

                <p>
                    ⭐ {movie.imdb_rating}
                </p>

                <p>
                    🎬 {movie.genre}
                </p>

                <p>
                    🎥 {movie.director}
                </p>

                <p>
                    ⏱ {movie.runtime}
                </p>

                <p>
                    📅 {movie.year}
                </p>

                <button className={styles.button}>
                    Add to Favourite
                </button>

            </div>

        </div>
    );
};

export default MovieCard;