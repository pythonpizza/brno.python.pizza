export type Event = {
    label?: string;
    name?: string;
    title?: string;
    photo?: string;
    link?: string;
    when?: string;
};

export const SCHEDULE: Event[] = [
    {
        label: "Open Doors",
        when: "2025/02/22 9:30 AM UTC+1"
    },
    {
        label: "TBD",
        when: "2024/02/24 10:00 AM UTC+1"
    },
    {
        label: "Happy Hour & Networking 🍻",
        when: "2025/02/22 6:00 PM UTC+1"
    },
];
