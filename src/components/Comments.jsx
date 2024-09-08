import React from "react";
import CommentBox from "./CommentBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function Comments() {
  const data = [
    {
      name: "Ahmad Zulhan Bakri",
      role: "Founder & CEO",
      company: "Maduraholic",
      content: "Saya sangat puas dengan hasil kerja dari tim Blizbyteco. Mereka telah membuat website yang tidak hanya tampak profesional, tetapi juga sangat user-friendly dan sesuai dengan kebutuhan usaha saya. Proses komunikasi berjalan lancar, dan setiap masukan yang saya berikan direspons dengan cepat dan akurat. Terima kasih untuk dedikasi dan kualitas kerja yang luar biasa! Saya tidak ragu merekomendasikan layanan Blizbyteco kepada siapa pun yang membutuhkan solusi website terbaik."
    },
    {
      name: "Ahmad Zulhan Bakri",
      role: "Founder & CEO",
      company: "Maduraholic",
      content: "Saya sangat puas dengan hasil kerja dari tim Blizbyteco. Mereka telah membuat website yang tidak hanya tampak profesional, tetapi juga sangat user-friendly dan sesuai dengan kebutuhan usaha saya. Proses komunikasi berjalan lancar, dan setiap masukan yang saya berikan direspons dengan cepat dan akurat. Terima kasih untuk dedikasi dan kualitas kerja yang luar biasa! Saya tidak ragu merekomendasikan layanan Blizbyteco kepada siapa pun yang membutuhkan solusi website terbaik."
    },
    {
      name: "Ahmad Zulhan Bakri",
      role: "Founder & CEO",
      company: "Maduraholic",
      content: "Saya sangat puas dengan hasil kerja dari tim Blizbyteco. Mereka telah membuat website yang tidak hanya tampak profesional, tetapi juga sangat user-friendly dan sesuai dengan kebutuhan usaha saya. Proses komunikasi berjalan lancar, dan setiap masukan yang saya berikan direspons dengan cepat dan akurat. Terima kasih untuk dedikasi dan kualitas kerja yang luar biasa! Saya tidak ragu merekomendasikan layanan Blizbyteco kepada siapa pun yang membutuhkan solusi website terbaik."
    },
    {
      name: "Ahmad Zulhan Bakri",
      role: "Founder & CEO",
      company: "Maduraholic",
      content: "Saya sangat puas dengan hasil kerja dari tim Blizbyteco. Mereka telah membuat website yang tidak hanya tampak profesional, tetapi juga sangat user-friendly dan sesuai dengan kebutuhan usaha saya. Proses komunikasi berjalan lancar, dan setiap masukan yang saya berikan direspons dengan cepat dan akurat. Terima kasih untuk dedikasi dan kualitas kerja yang luar biasa! Saya tidak ragu merekomendasikan layanan Blizbyteco kepada siapa pun yang membutuhkan solusi website terbaik."
    },
  ];
  return (
    <div className="py-36 px-12">
      <h2 className="text-6xl font-semibold">What they said</h2>
      <div className="py-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper py-12"
        >
          {data.map((comment, index) => (
            <SwiperSlide key={index}>
              <CommentBox
                name={comment.name}
                role={comment.role}
                company={comment.company}
                content={comment.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
