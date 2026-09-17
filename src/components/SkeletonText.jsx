import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import "../styles/SkeletonText.css";

/*
 * Readiness context. Flips to true once web fonts have loaded,
 * with a short minimum shimmer so bars never flash by, and a
 * hard fallback so text can never stay hidden. Defaults to
 * true so components render normally without a provider.
 */
const TextReadinessContext = createContext(true);

export const TextReadinessProvider = ({ children }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const minShimmer = new Promise((resolve) => {
            setTimeout(resolve, 600);
        });

        const fontsLoaded =
            typeof document !== "undefined" &&
            document.fonts &&
            document.fonts.ready
                ? document.fonts.ready
                : Promise.resolve();

        /* Never keep text hidden for more than 2.5s */
        const fallback = new Promise((resolve) => {
            setTimeout(resolve, 2500);
        });

        Promise.race([
            Promise.all([fontsLoaded, minShimmer]),
            fallback,
        ]).then(() => {
            if (!cancelled) {
                setReady(true);
            }
        });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <TextReadinessContext.Provider value={ready}>
            {children}
        </TextReadinessContext.Provider>
    );
};

/**
 * Text with a built-in skeleton loader.
 *
 * While not ready, the real text stays in the DOM (hidden) so
 * the element keeps its exact size, and shimmering bars are
 * overlaid on top of it.
 *
 * - as      → element type to render (h1, h2, p, span, a, ...)
 * - lines   → number of shimmer bars
 * - tone    → "dark" | "light" | "accent" (matches section bg)
 * - widths  → optional per-bar widths, e.g. ["70%", "90%", "55%"]
 */
const SkeletonText = ({
    as: Tag = "div",
    lines = 1,
    tone = "dark",
    widths,
    className = "",
    children,
    ...rest
}) => {
    const ready = useContext(TextReadinessContext);

    if (ready) {
        return (
            <Tag className={className} {...rest}>
                {children}
            </Tag>
        );
    }

    const barCount = Math.max(1, lines);

    return (
        <Tag
            className={`skeleton-text ${className}`.trim()}
            aria-hidden="true"
            {...rest}
        >
            {/* Hidden real text: keeps the exact box size */}
            <span className="skeleton-text-content">
                {children}
            </span>

            <span className="skeleton-text-bars">
                {Array.from({ length: barCount }, (_, i) => {
                    const isLast = i === barCount - 1;
                    const custom = widths && widths[i];
                    const width =
                        custom ||
                        (isLast && barCount > 1
                            ? "62%"
                            : undefined);

                    return (
                        <span
                            key={i}
                            className={`skeleton-text-bar ${tone}`}
                            style={
                                width
                                    ? {
                                          "--skeleton-width": width,
                                      }
                                    : undefined
                            }
                        />
                    );
                })}
            </span>
        </Tag>
    );
};

export default SkeletonText;
