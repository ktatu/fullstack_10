import { RepositoryListContainer } from "../../../components/RepositoryList"
import { render, screen } from "@testing-library/react-native"
import { roundStatistic } from "../../../components/RepositoryList/RepositoryItemStatistic"

describe("RepositoryList", () => {
    describe("RepositoryListContainer", () => {
        it("renders repository information correctly", () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
                    startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
                },
                edges: [
                    {
                        node: {
                            id: "jaredpalmer.formik",
                            fullName: "jaredpalmer/formik",
                            description: "Build forms in React, without the tears",
                            language: "TypeScript",
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
                        },
                        cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
                    },
                    {
                        node: {
                            id: "async-library.react-async",
                            fullName: "async-library/react-async",
                            description: "Flexible promise-based React data loader",
                            language: "JavaScript",
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/54310907?v=4",
                        },
                        cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
                    },
                ],
            }

            render(<RepositoryListContainer repositories={repositories} />)

            screen.debug()

            const repositoryItems = screen.getAllByTestId("repositoryItem")
            const [firstRepositoryItem, secondRepositoryItem] = repositoryItems

            const firstRepoNode = repositories.edges[0].node
            const secondRepoNode = repositories.edges[1].node

            // fullName
            expect(firstRepositoryItem).toHaveTextContent(firstRepoNode.fullName)
            expect(secondRepositoryItem).toHaveTextContent(secondRepoNode.fullName)

            // description
            expect(firstRepositoryItem).toHaveTextContent(firstRepoNode.description)
            expect(secondRepositoryItem).toHaveTextContent(secondRepoNode.description)

            // language
            expect(firstRepositoryItem).toHaveTextContent(firstRepoNode.language)
            expect(secondRepositoryItem).toHaveTextContent(secondRepoNode.language)

            // forks
            expect(firstRepositoryItem).toHaveTextContent("Forks")
            expect(firstRepositoryItem).toHaveTextContent(roundStatistic(firstRepoNode.forksCount))

            expect(secondRepositoryItem).toHaveTextContent("Forks")
            expect(secondRepositoryItem).toHaveTextContent(secondRepoNode.forksCount)

            // stargazers
            expect(firstRepositoryItem).toHaveTextContent("Stars")
            expect(firstRepositoryItem).toHaveTextContent(
                roundStatistic(firstRepoNode.stargazersCount)
            )

            expect(secondRepositoryItem).toHaveTextContent("Stars")
            expect(secondRepositoryItem).toHaveTextContent(
                roundStatistic(secondRepoNode.stargazersCount)
            )

            // rating average
            expect(firstRepositoryItem).toHaveTextContent("Rating")
            expect(firstRepositoryItem).toHaveTextContent(firstRepoNode.ratingAverage)

            expect(secondRepositoryItem).toHaveTextContent("Rating")
            expect(secondRepositoryItem).toHaveTextContent(secondRepoNode.ratingAverage)

            // review count
            expect(firstRepositoryItem).toHaveTextContent("Reviews")
            expect(firstRepositoryItem).toHaveTextContent(secondRepoNode.reviewCount)

            expect(secondRepositoryItem).toHaveTextContent("Reviews")
            expect(secondRepositoryItem).toHaveTextContent(secondRepoNode.reviewCount)
        })
    })
})
