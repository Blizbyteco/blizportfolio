import React from "react";
import CommentBox from "./CommentBox";

export default function Comments() {
  return (
    <div className="py-36 px-12">
      <h2 className="text-6xl font-semibold">What they said</h2>

      <div className="flex gap-x-24 py-24 overflow-auto">
        <CommentBox
            name="Ahmad Zulhan Bakri"
            role="Founder & CEO"
            content="Saya sangat puas dengan hasil kerja dari tim Blizbyteco. 
    Mereka telah membuat website yang tidak hanya tampak profesional, tetapi juga sangat user-friendly dan sesuai dengan kebutuhan usaha saya. Proses komunikasi berjalan lancar, dan setiap masukan yang saya berikan direspons dengan cepat dan akurat. Terima kasih untuk dedikasi dan kualitas kerja yang luar biasa! Saya tidak ragu merekomendasikan layanan Blizbyteco kepada siapa pun yang membutuhkan solusi website terbaik."
        />
        <CommentBox
            name="Ahmad Zulhan Bakri"
            role="Founder & CEO"
            content="Saya sangat puas dengan hasil kerja dari tim Blizbyteco. 
    Mereka telah membuat website yang tidak hanya tampak profesional, tetapi juga sangat user-friendly dan sesuai dengan kebutuhan usaha saya. Proses komunikasi berjalan lancar, dan setiap masukan yang saya berikan direspons dengan cepat dan akurat. Terima kasih untuk dedikasi dan kualitas kerja yang luar biasa! Saya tidak ragu merekomendasikan layanan Blizbyteco kepada siapa pun yang membutuhkan solusi website terbaik."
        />
        <CommentBox
            name="Ahmad Zulhan Bakri"
            role="Founder & CEO"
            content="Saya sangat puas dengan hasil kerja dari tim Blizbyteco. 
    Mereka telah membuat website yang tidak hanya tampak profesional, tetapi juga sangat user-friendly dan sesuai dengan kebutuhan usaha saya. Proses komunikasi berjalan lancar, dan setiap masukan yang saya berikan direspons dengan cepat dan akurat. Terima kasih untuk dedikasi dan kualitas kerja yang luar biasa! Saya tidak ragu merekomendasikan layanan Blizbyteco kepada siapa pun yang membutuhkan solusi website terbaik."
        />
      </div>

    </div>
  );
}
