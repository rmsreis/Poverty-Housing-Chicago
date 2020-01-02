// API key
const API_KEY = "pk.eyJ1IjoicHFtdXJwaHkiLCJhIjoiY2szdGY4YTFtMDI5MzNkbDdkM3U5dzJjMiJ9.Vu8FS4DCrXwhSzfHNkWCxQ";

var indexdat = [
    {
      "AreaNumber": 1,
      "HARDSHIPINDEX": 39
    },
    {
      "AreaNumber": 2,
      "HARDSHIPINDEX": 46
    },
    {
      "AreaNumber": 3,
      "HARDSHIPINDEX": 20
    },
    {
      "AreaNumber": 4,
      "HARDSHIPINDEX": 17
    },
    {
      "AreaNumber": 5,
      "HARDSHIPINDEX": 6
    },
    {
      "AreaNumber": 6,
      "HARDSHIPINDEX": 5
    },
    {
      "AreaNumber": 7,
      "HARDSHIPINDEX": 2
    },
    {
      "AreaNumber": 8,
      "HARDSHIPINDEX": 1
    },
    {
      "AreaNumber": 9,
      "HARDSHIPINDEX": 8
    },
    {
      "AreaNumber": 10,
      "HARDSHIPINDEX": 21
    },
    {
      "AreaNumber": 11,
      "HARDSHIPINDEX": 25
    },
    {
      "AreaNumber": 12,
      "HARDSHIPINDEX": 11
    },
    {
      "AreaNumber": 13,
      "HARDSHIPINDEX": 33
    },
    {
      "AreaNumber": 14,
      "HARDSHIPINDEX": 53
    },
    {
      "AreaNumber": 15,
      "HARDSHIPINDEX": 35
    },
    {
      "AreaNumber": 16,
      "HARDSHIPINDEX": 34
    },
    {
      "AreaNumber": 17,
      "HARDSHIPINDEX": 28
    },
    {
      "AreaNumber": 18,
      "HARDSHIPINDEX": 50
    },
    {
      "AreaNumber": 19,
      "HARDSHIPINDEX": 70
    },
    {
      "AreaNumber": 20,
      "HARDSHIPINDEX": 71
    },
    {
      "AreaNumber": 21,
      "HARDSHIPINDEX": 42
    },
    {
      "AreaNumber": 22,
      "HARDSHIPINDEX": 23
    },
    {
      "AreaNumber": 23,
      "HARDSHIPINDEX": 85
    },
    {
      "AreaNumber": 24,
      "HARDSHIPINDEX": 10
    },
    {
      "AreaNumber": 25,
      "HARDSHIPINDEX": 73
    },
    {
      "AreaNumber": 26,
      "HARDSHIPINDEX": 92
    },
    {
      "AreaNumber": 27,
      "HARDSHIPINDEX": 83
    },
    {
      "AreaNumber": 28,
      "HARDSHIPINDEX": 15
    },
    {
      "AreaNumber": 29,
      "HARDSHIPINDEX": 87
    },
    {
      "AreaNumber": 30,
      "HARDSHIPINDEX": 96
    },
    {
      "AreaNumber": 31,
      "HARDSHIPINDEX": 76
    },
    {
      "AreaNumber": 32,
      "HARDSHIPINDEX": 3
    },
    {
      "AreaNumber": 33,
      "HARDSHIPINDEX": 7
    },
    {
      "AreaNumber": 34,
      "HARDSHIPINDEX": 82
    },
    {
      "AreaNumber": 35,
      "HARDSHIPINDEX": 47
    },
    {
      "AreaNumber": 36,
      "HARDSHIPINDEX": 78
    },
    {
      "AreaNumber": 37,
      "HARDSHIPINDEX": 97
    },
    {
      "AreaNumber": 38,
      "HARDSHIPINDEX": 57
    },
    {
      "AreaNumber": 39,
      "HARDSHIPINDEX": 26
    },
    {
      "AreaNumber": 40,
      "HARDSHIPINDEX": 88
    },
    {
      "AreaNumber": 41,
      "HARDSHIPINDEX": 14
    },
    {
      "AreaNumber": 42,
      "HARDSHIPINDEX": 58
    },
    {
      "AreaNumber": 43,
      "HARDSHIPINDEX": 55
    },
    {
      "AreaNumber": 44,
      "HARDSHIPINDEX": 60
    },
    {
      "AreaNumber": 45,
      "HARDSHIPINDEX": 41
    },
    {
      "AreaNumber": 46,
      "HARDSHIPINDEX": 75
    },
    {
      "AreaNumber": 47,
      "HARDSHIPINDEX": 79
    },
    {
      "AreaNumber": 48,
      "HARDSHIPINDEX": 38
    },
    {
      "AreaNumber": 49,
      "HARDSHIPINDEX": 52
    },
    {
      "AreaNumber": 50,
      "HARDSHIPINDEX": 51
    },
    {
      "AreaNumber": 51,
      "HARDSHIPINDEX": 65
    },
    {
      "AreaNumber": 52,
      "HARDSHIPINDEX": 64
    },
    {
      "AreaNumber": 53,
      "HARDSHIPINDEX": 62
    },
    {
      "AreaNumber": 54,
      "HARDSHIPINDEX": 98
    },
    {
      "AreaNumber": 55,
      "HARDSHIPINDEX": 44
    },
    {
      "AreaNumber": 56,
      "HARDSHIPINDEX": 32
    },
    {
      "AreaNumber": 57,
      "HARDSHIPINDEX": 67
    },
    {
      "AreaNumber": 58,
      "HARDSHIPINDEX": 84
    },
    {
      "AreaNumber": 59,
      "HARDSHIPINDEX": 61
    },
    {
      "AreaNumber": 60,
      "HARDSHIPINDEX": 43
    },
    {
      "AreaNumber": 61,
      "HARDSHIPINDEX": 91
    },
    {
      "AreaNumber": 62,
      "HARDSHIPINDEX": 69
    },
    {
      "AreaNumber": 63,
      "HARDSHIPINDEX": 93
    },
    {
      "AreaNumber": 64,
      "HARDSHIPINDEX": 29
    },
    {
      "AreaNumber": 65,
      "HARDSHIPINDEX": 56
    },
    {
      "AreaNumber": 66,
      "HARDSHIPINDEX": 80
    },
    {
      "AreaNumber": 67,
      "HARDSHIPINDEX": 89
    },
    {
      "AreaNumber": 68,
      "HARDSHIPINDEX": 94
    },
    {
      "AreaNumber": 69,
      "HARDSHIPINDEX": 66
    },
    {
      "AreaNumber": 70,
      "HARDSHIPINDEX": 37
    },
    {
      "AreaNumber": 71,
      "HARDSHIPINDEX": 74
    },
    {
      "AreaNumber": 72,
      "HARDSHIPINDEX": 12
    },
    {
      "AreaNumber": 73,
      "HARDSHIPINDEX": 48
    },
    {
      "AreaNumber": 74,
      "HARDSHIPINDEX": 16
    },
    {
      "AreaNumber": 75,
      "HARDSHIPINDEX": 30
    },
    {
      "AreaNumber": 76,
      "HARDSHIPINDEX": 24
    },
    {
      "AreaNumber": 77,
      "HARDSHIPINDEX": 19
    }
  ]
