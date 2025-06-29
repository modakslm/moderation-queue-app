const mockPosts = [
    {
        id: "post_123",
        title: "This is a sample post",
        content: "Full post content here...",
        author: {
          username: "user123",
          id: "user_456"
        },
        reportedReason: "Spam",
        reportedAt: "2025-06-27T10:30:00Z",
        status: "pending",
        reportCount: 3
      },
      {
        id: "post_456",
        title: "Another post to review",
        content: "Lorem ipsum dolor sit amet.",
        author: {
          username: "modUser",
          id: "user_789"
        },
        reportedReason: "Harassment",
        reportedAt: "2025-06-27T12:00:00Z",
        status: "pending",
        reportCount: 2
      },
      {
        id: "post_1",
        title: "Buy this now!",
        content: "Limited time offer, buy now!",
        author: { username: "spammer", id: null },
        reportedReason: "Spam",
        reportedAt: "2025-06-27T10:30:00Z",
        status: "pending",
        reportCount: 2,
        imageUrl: "https://picsum.photos/200/300"
      },
      {
        id: "post_2",
        title: "Offensive Content",
        content: "This post contains offensive language.",
        author: { username: "troll123", id: null },
        reportedReason: "Abuse",
        reportedAt: "2025-06-27T11:45:00Z",
        status: "pending",
        reportCount: 5,
        imageUrl: "https://via.placeholder.com/300x200?text=Offensive+Post"
      },
      {
        id: "post_3",
        title: "Inappropriate Content",
        content: "This post contains inappropriate language.",
        author: { username: "troll124", id: null },
        reportedReason: "inappropriate",
        reportedAt: "2025-06-29T09:30:00Z",
        status: "pending",
        reportCount: 7,
        imageUrl: "https://via.placeholder.com/300x200?text=Inappropriate+Content"
      },
      {
        id: "post_4",
        title: "Fake Giveaway",
        content: "Click here to win a free iPhone!",
        author: { username: "phisherman", id: null },
        reportedReason: "Scam",
        reportedAt: "2025-06-29T10:00:00Z",
        status: "pending",
        reportCount: 4,
        imageUrl: "https://via.placeholder.com/300x200?text=Fake+Giveaway"
      },
]

export default mockPosts;