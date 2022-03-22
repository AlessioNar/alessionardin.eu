---
title: "The political reach of US Politicians and Celebrities on Twitter: who is the most influential?"
date: 2022-03-22T15:36:49+01:00
draft: false
---

### About

In the age of technology, millions of social media users eagerly absorb hundreds of Twitter messages from their favorite celebrities and politicians on a daily basis… but how do these widely-followed individuals influence one another? Our research aims to analyze the social networks of high-profile celebrities and American politicians, evaluating which group influences the other.

#### About our research

In his first tweets of 2019, Kanye West famously tweeted, “Trump all day…just so in 2019 you know where I stand”, alluding to his political association with the current administration of the United States government. However, West was not the first celebrity to align himself with President Trump. Rosanne Barr, Mike Tyson, and Jon Voight are just a couple others who publicly support the president through social media. In the past two decades, social media has revolutionized the way people interact with one another. It has also given celebrities and politicians new channels with which to interact with their fans. These celebrity forays into politics prompted the question: how do politicians and celebrities interact and influence each other on social media, more specifically, on Twitter? Our research uses Social Network Analysis to determine whether or not celebrities and politicians have any influence over one another, creating intrinsically linked social networks that show where connections in each network occur. We believe Twitter was the best platform to study this as it is a highly trafficked interactive page, where people can get real-time updates from their favorite news sources, politicians, and celebrities.

#### Who are we?

Cultural Globalization and Big Data began as a class and turned into a research project. Studying at Venice International University for the fall semester of 2019, students from across the world came together to create and research a project of their choice. As we learned and were guided by renowned Duke University computational social scientist, Dr. Chris Bail, we conducted research while at the same time reading a variety of scholarly texts, participating in class discussions, and learning to code with R—a first for many.


#### So what?

In the ever-polarizing political landscape of the United States, people are quick to point fingers at celebrities, stepping out of their roles as entertainers and addressing political issues. The main criticism is that these celebrities are frivoling politics and adding fuel to what people call the ‘show’ aspect of political debate; drawing attention away from the facts of the issues and making it a battle for influence and popularity. Whether these celebrities should be able to continue using their influence in political contexts and their merits as commentators on politics we will leave to the trenches of online debate forums. However, discovering the degree of influence of celebrity voices on politics could provide clarity to some of these debates as well as give us an insight to ourselves and society as a whole. Are we merely a society based on popularity rather than truth? If celebrities have ultimate influence on the political landscape are we approaching a world where all our favorite stars begin to choose sides and politics and Hollywood merge into one? Or, on the other hand, if the influence of celebrities is null why do celebrities even bother to speak out and what is everyone getting so upset about? These are just some of the questions we set out with while conducting our research.

It is important to note that the data through which we conducted our research was exclusively collected through twitter and from a closed list of celebrities and elected officials, therefore, as much as we would have liked to ultimately answer these questions once and for all, the influence of celebrities on politics that we have gathered is limited to the twitter-sphere specifically in the United States.

#### Why is it important?

Nowadays we live in a society in which many people have reached positions of influence. Through the new channels of social media, the reach has never been more extensive. The power influence has gained, through the internet and social media, has become part of our everyday life and has shaped our perception of the world in ways which were not thought to be possible.
As shown in the book “Likewar: the weaponization of social media” by Emerson T. Brooking and P. W. Singer, the way these new devices shape reality and the perception we have of it makes them likely to be more powerful than anything else. They influence our social interactions in what Foucault called the “microphysics of power”. They reach inside the most intimate form of social relation, shaping preferences, views, beliefs and even debate.
The crucial part of this process is probably happening in the realm of politics. The new control these platforms have gained was shown in different occasions, most evidently in the 2016 US presidential election, which brought Donald J. Trump inside the Oval Office. It is therefore important to understand the dynamics of the way in which information, and, in turn, influence, move inside the digital world, shaping it. Our research is a first attempt to do so, focusing on the interaction between the two selected groups of people - politicians and celebrities - to strictly measure, in an elementary way, the influence each group has inside the political world.


### How we did it

This research focuses on determining the relationship between celebrities and politicians on Twitter, determining which group influences the other. For the purposes of this research, we first provided a definition of both groups in order to create our lists according to specific parameters: a politician is defined as any elected United States official. We chose to make a list of politicians belonging to the American political landscape because their prominence on Twitter is most significant. A celebrity is defined as someone who works in showbusiness Our list of celebrities contains celebrities significant to US pop culture . Our data set analyzes over 1,500 “top” celebrities and elected officials, selected following the aforementioned assumption. Only celebrities and politicians with Twitter accounts were included in the study as all data was mined from Twitter

#### Why did we chose this topic?

After much deliberation, we decided to study the links between celebrity and politician networks on Twitter due to the extremely politicized climate of social media platforms today. It seems that no matter where we turn to, there is always talk about politics, even in non-traditional news platforms. Celebrities also became more vocal about their political stances in recent years, thus, we believed that this research project would give us more insight as to how influential these social networks actually are.

#### Social network analysis

Social Network Analysis is the study of relationships of a set of people. This allows researchers to map and measure these relationships as social networks. Social Network Analysis operates under the assumption that the relationships found between individuals have a relevant impact on behavior. Social networks are analyzed by establishing nodes, which represent an individual, and evaluating edges, which are lines that denote relationships between nodes. Social Network Analysis also allows researchers to determine how different environments are connected, and which nodes connect them. Most significantly, betweenness centrality shows the importance of nodes in connecting clusters. In our research, we first entered our edges and nodes into R Studio using the iGraph package before visualizing the networks in Gephi.

#### Sentiment analysis

In order to study the possible correlation between the sentiment of tweets and their outreach, we needed a way to assign feelings to words. Sentiment can be widely defined as one’s attitude or emotion regarding a topic. To do this, we used sentiment analysis which is a way to classify the emotions that a text (or tweets in this case) might evoke in readers. There are many sentiment scoring lexicons to choose from, and for our study we chose the “nrc” method of the “Syuzhet” package because of its functionality with most Latin-character languages. Positive words receive a score of 1; negative words receive a score of -1; words that convey no opinion at all are scored 0, and then the values of each word are summed to collect an overall sentiment score for the entire selection.
