"use client";
import React, { useState, useRef, useCallback } from "react";
import Navbar from "../../components/dashboard/Navbar";
import MovieGrid from "../../components/dashboard/MovieGrid";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "../api/movieApi";

interface PageData {
  page: number;
  size: Number;
}

const initialPageData = {
  page: 1,
  size: 12,
};
const DashboardPage = () => {
  const observer = useRef<IntersectionObserver | null>(null);

  const [pageData, setPageData] = useState<PageData>(initialPageData);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["Movies", pageData.page],
      queryFn: ({ pageParam }) =>
        getMovies({
          page: pageParam,
          size: pageData.size,
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (lastPage.last) {
          return undefined;
        }

        return lastPage.number + 1;
      },
    });

  const movies = data?.pages.flatMap((page) => page.content);
  const lastMovieRef = useCallback(

    (node: HTMLDivElement | null) => {

        if (isFetchingNextPage) return;

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(entries => {

            if (
                entries[0].isIntersecting &&
                hasNextPage
            ) {
                fetchNextPage();
            }

        });

        if (node) {
            observer.current.observe(node);
        }

    },

    [fetchNextPage, hasNextPage, isFetchingNextPage]

);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Your Home!</h1>
      <p style={styles.subtitle}>Check out if you have any favorite movies.</p>
      <MovieGrid movies={movies} lastMovieRef={lastMovieRef}/>
    </div>
  );
};
export default DashboardPage;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#555",
  },
};
