# Toolchain for building the resume: pandoc + TeX Live + Bun.
FROM oven/bun:1.3-debian AS bun

FROM pandoc/latex:3.11-debian

# Packages used by resume.tex. Add new ones here when adding a \usepackage.
# tlmgr must match the online repository's version before it can install anything.
RUN tlmgr update --self && tlmgr install latexmk titlesec marvosym enumitem fancyhdr babel-english geometry hyperref tools

COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun

ENV RESUME_IN_DOCKER=1
ENTRYPOINT []
