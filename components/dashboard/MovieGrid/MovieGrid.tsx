import styles from "./MovieGrid.module.css";
import MovieCard from "../MovieCard";
import { Movie } from "@/interfaces/Movie";

interface Props {
  movies: Movie[];
  lastMovieRef?: (node: HTMLDivElement | null) => void;
}

const MovieGrid = ({ movies = [], lastMovieRef }: Props) => {
  return (
    <div className={styles.grid}>
      {movies.map((movie, index) => {
        const isLastMovie = index === movies.length - 1;

        return (
          <div key={movie.id} ref={isLastMovie ? lastMovieRef : null}>
            <MovieCard key={movie.id} movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieGrid;
