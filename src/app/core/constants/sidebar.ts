export const sidebar = [
    {
        name: "Tìm Kiếm",
        path: "/search",
        icon: "fa-solid fa-magnifying-glass",
        background: "#2ecc71",
        child: null,
    },
    {
        name: "Trang Chủ",
        path: "/",
        icon: "fa-solid fa-house",
        child: null,
        background: "#3498db",
    },
    {
        name: "Khám Phá",
        path: null,
        icon: "fa-regular fa-compass",
        child: [
            {
                name: "Bài Hát",
                path: "/song",
            },
            {
                name: "Playlist",
                path: "/playlist",
            },
            {
                name: "Video",
                path: "/video",
            },
            {
                name: "Nghệ Sĩ",
                path: "/artist",
            },
        ],
        background: "#f1c40f",
    },
    {
        name: "Chủ đề",
        path: "/topics",
        icon: "fa-solid fa-headphones-simple",
        background: "#9b59b6",
    },
    {
        name: "BXH",
        path: "/bxh",
        icon: "fa-solid fa-square-poll-vertical",
        child: null,
        background: "#e67e22",
    },
    {
        name: "Lịch sử",
        path: "/history",
        icon: "fa-solid fa-clock-rotate-left",
    },
];
