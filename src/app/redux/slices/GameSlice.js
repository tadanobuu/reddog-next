import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    card1: 0,
    card1Url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUCE0FkJ5HUq_NFpqPB9GCMfqxgsOtEptXJCdlHe8ES8HkwGRfe5U3hQZoR_4RqFn-u2BYwNc9jUOHtgI0uUEAEjQsD3TZFzH-8fJHlEk29YHHkUe0oOSC4E9wUefe0c2BA88eORbO8ylj/s800/card_back.png",
    card2: 0,
    card2Url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUCE0FkJ5HUq_NFpqPB9GCMfqxgsOtEptXJCdlHe8ES8HkwGRfe5U3hQZoR_4RqFn-u2BYwNc9jUOHtgI0uUEAEjQsD3TZFzH-8fJHlEk29YHHkUe0oOSC4E9wUefe0c2BA88eORbO8ylj/s800/card_back.png",
    card3: 0,
    card3Url: "",
    isWin: false,
    odds: 0,
    isPair: false,
    isConsecutive: false,
    spread: 0,
    rand: 0,
}

const cards = [
    ["2s", 2, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIFtPPeLUE71rAaxy9GCXMpcLTe5xrKpJ1umnrjTXu1blrQ8nSO_5CJ3U5lHN49p7CBRfHmTYyZylgM2ZSw6sjlUqEr9P4hInVp-Sa8R3llAyOx48b0gXzt8bAQCKrRQZ8UNVnau3IpzEF/s800/card_spade_02.png"],
    ["3s", 3, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6BM4d-xxp35ND8XJm2LmK2SmH4GNMSNQ53nkuH1zIU1BQPrmc1Li6zqxGf8R4ABt85hJlB_5f5TkDLMiUn8qs4G046XoF5fd5-ub7ljlDg87zSSmPmp5efYvaUi_2PXktAQaPJBKFJf0H/s800/card_spade_03.png"],
    ["4s", 4, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu_IvT79wkgAt-JfwfAJXtFI9fk64cdvdlPWYy8U1P9TtsZD2eyyGkkC7nVuMMIc_G_FzyfwBquRhEE2GHxWxe21fWoSlLEYiWAAOUiGnRJ5TpovyB1kfLGCEOkXmBIswtJWFakgzGWpOr/s800/card_spade_04.png"],
    ["5s", 5, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJERnEIokWKtIpZx1-U6Sa7cmqznNhgtXQcDCGWayzaSxY4OgAm9zvS6Uo9omXAMulY8rromhAj4O1INNN98aCtxgvhs2fIG82_EJkzAvxdhVynczj0yv_YGes5v_BANU9aqZ3hxBVS6P2/s800/card_spade_05.png"],
    ["6s", 6, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ5Bqe_2DclEubYO40pSb106srvDZl-i_fXE6xdYAsg5ZgHGw2hTIgAN_x2-jNjsUWi2xqPtyXpR_AZe9HurXVcwQ4es9MNRo71NOGd-_P_7H4mRig10lRWdFts8Fs3-oMQQ7jD6HcYspW/s800/card_spade_06.png"],
    ["7s", 7, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaKrSnV7GsU65gpkC3OrfzmbUdkCq7wVVCtt7B7lsZqSfrqHaZFUtlnmIZuJkvU5EqBOF8cMJePdJDfGxFc2K7DgavW_glB48bcSsluvmIhAFhTnQT6DGwECwElLvL_bk_icQk0PjX7ljy/s800/card_spade_07.png"],
    ["8s", 8, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRRWlLKwM4xU6fg5dVQJh13jF5A93xycDKlQZ9Q6heCjDqIP0czGrevFlh2NDUrOqH4kpoxJHcW-ruJaIfl9mQTQ8ajcmlm2MpwHKaKJDznCfvaX5LApsXI3B0xSl_NzJLylOnFp6iu7Ar/s800/card_spade_08.png"],
    ["9s", 9, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOJGJ-kqHsLKZHbJfqkIkdGwvw8XhkEwL1ksnmeY7bHCKYst7wwE5i8xGV_cdi16d2RMsfSHd9o48JxNVNoA0lZMRtow5seQRbiwqnmUJBMsqLgjiQcAWgWbqmPVMYTsAuaGAQwk2HQgMu/s800/card_spade_09.png"],
    ["Ts", 10, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggjhJA9Qjz9CiNVrHEMKBdv7IVj_WxaOXb1G2yoAVkmbdo9Y3Wz2j5saVU3TfetXM1kzDXHp_Ne6omWHUdYf16uJt7tKcVUUTpXeF1jxVO8oGBpdLYT3eSIMcnSDhYLRiGVCKIwjFROn5f/s800/card_spade_10.png"],
    ["Js", 11, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg298_Wh-OA1rSManfnefcyJtijYsFNKM7MkxNiCqjfz9yPr1JkPCUXQ9JQy6cDIMA1OtuQvmul9VZ9V5ZLLCxtPTzWbExuB0wcsAP3ZUNV37rDa7pFTkq2Vwry_DtmCERs8qq5rTs4OO3s/s600/card_spade_11.png"],
    ["Qs", 12, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgCuqMjx8aZi7g_C33OmfilPdIHRls6cKcl15guIaI_jXMjxCCzpASfKkrRS0QuD29WJ1fUMbq8vUPdOJLfY68cHxKl19gVtRjtJ351jhbEKJ21BQDjdu9vANSGfCKMpa4TeLORnev748R/s800/card_spade_12.png"],
    ["Ks", 13, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtCppn4jhq-Zs_xB8dev5Xto6IxZxzkFaohZ6xZM101pwFIFAPUHFR-QT_FDI9onWafI8pvEDcd_UFXz9R2Lxl05SSZJruFX3gBmcUvwlW3chnHzo-9YA_Vv0Gu5guxjhyphenhyphenR1Sho5H-v2dv/s800/card_spade_13.png"],
    ["As", 14, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeTw0FxdurjVSBKEgjS9ZS0fhwqoVKuVwAhjeckj17pvbjw3XSCvaygiaXNF2wpiZ0BwVM0KZ2O9_ViAgR_ysilOSov538xPMUbK-YXvjFLsb0UPJaoIOZRVlYxgUSKqacAwH2J2ZczDht/s800/card_spade_01.png"],
    ["2h", 2, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiF7-S4ysQ6jkY_Cyuj6Rf5LDD7TKsZE0W5xtLlPSW-4UYuj5j0BiLb_li8RgKzDettpuYggCkJveGBY_FpMfC13eMHDYVeI9LBq83r9Z-qWBmc5R_Sj_-lP1jOwgFSQh-95V6pq6hZ-mHD/s800/card_heart_02.png"],
    ["3h", 3, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7_jufOD8vfuFrAhDhviwJjN8-1Olv5rZ02UiOVFA4o7jTFIQ1LkHsEgb5LGdMvflHJ8-qvtr4WspNz2ed1hJAOhn8oDLC_xCSOLNdM8sQyxC8ak_hQz5n_5ABxgQ2VTzEWFkLb75eJrk5/s800/card_heart_03.png"],
    ["4h", 4, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR74T3ku2YRGM2SCzQvQ11z8QjRc05PdarOTecrmrkV3Q6Fty7gJ-XRPraxA2gbkusPxYsuYVomwG6oUv91TRQi2AChDEe5KT6J23Ot_irfpfVKPjSiCbxqMWbEmrOYl0RKWAwOPYVrSMo/s800/card_heart_04.png"],
    ["5h", 5, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnjFSjp-TDjjfZJDfu0gmM4z6e68a-ENqUIIWctApWUaJEWBIF9xlF-ryeYPG2yDIbB5rzYphdS-9X4eYknCzh-95Zzf0NIWwj2sv21lL74PJKd9SGunLTuqQzi9K0FOkmle4zuJfIfPVM/s800/card_heart_05.png"],
    ["6h", 6, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiDZYqOGZgatV84G2drgTgVCjyxd9uuse-6yJT5kWWxsrA-ZtyFIgMmZi8IZ86wm8E5F7Hp3zVeZWCNMeq3oiBsmMe9O_oWdB9_iErVlJw_dABcwugRdOvsf6yzd8BwOPXVmjbiUFsDMFW/s800/card_heart_06.png"],
    ["7h", 7, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtn_ocrpSPGQ1lf-rRaPWhv66JUrcrAMBEPNaKRHP8HdhRG0aYd_u-DbkKZPu566AirRJcY3ZSPNdBAL2WpPT_I5F26zccaty3bqmcBVTXhah0jXOcIlFRmgwVAvZiPEDiXLSj3Cf4nPJL/s800/card_heart_07.png"],
    ["8h", 8, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz1TV3k_0czhkhToSPbLB5zGENFKJijb0VqDZyUPn3zwWRFLwRwd23QDOjsKkkjcDkb5767spnRmKQ-lmLqm7SJwVXB4YZ0BSRm8pFQUVAIaxWNT-j7frIsf0orgt90lBJd63Bw_NXsaKB/s800/card_heart_08.png"],
    ["9h", 9, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhStFwj4d2QsxhqkLNasNpNrZZcJQE6g1jF3OwN39nh_CYX4YeEZiGfZKBdEngHWNm7sLe-7Wyaq_d6oVWEXpAk1A2rkaDIq9-cS0N4auR5HAwAUSiKKGT8UcYJYNWtcjz2odPstBho6wrn/s800/card_heart_09.png"],
    ["Th", 10, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgksE3RYxFyrKYNJ_MBzgSzHuSdsvSx-2i-asUg6R2t8cTP5gKqqW84ctT96KDyAyni2FVLbNeuYy9wvifdgx3FxE_00QoGz0vSIODUgUk9PV8pnHdqptsWv-OtC7WH2SMmePx9kFbgMrmJ/s800/card_heart_10.png"],
    ["Jh", 11, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE6LUylnhoMsQhq5qGv8k7qSL_XkYOXyhnckgxQW9XHZHLCVrU4qtYIGB0KNUIo1SyLz0tXhasM5PDnizbOBMvqMl4kYrh6-_ECi856osijTvVpuLoAdoCf8AkDUf1M4oMTGqwtnCzlQoL/s800/card_heart_11.png"],
    ["Qh", 12, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit3I_wjc9Rn5Kuj1WOfERYaVBoOb2fMkOdE_fenfJ-7DWEisOepxo32XiuMhA5o_OIGfaDyNH3Sqrh5A7SF4ks85KjlQr7vTOJ7zKt1Vh1al29epvc6NVa0E38UMx00P7_o6eNYzrwdHQl/s800/card_heart_12.png"],
    ["Kh", 13, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDVge-sXAa4-AMdEs6H1TZKU6YuTuUOUXkqRdiUr6zVr6FjoYceox0H2WtGwhQSoCVFTle9IDsHWZHlNrnfwDz211T3KMx96n7rxg1dJheLF_ewHEGcLGSGRFAof6W5UyUS_QPi2l8FQe3/s800/card_heart_13.png"],
    ["Ah", 14, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLQGB2Gg19QADfwiCNcfWXuh0VETbQROmxC9oSnfhWdJr9w7NYpsSj_SG-oIq0NR02CZKaieC1586jxTZ70NI2-zYQVAV7pr97Nya71i9gTmp76J3vSn_QGEikJgajdBXXYJB_tc7wPtyA/s800/card_heart_01.png"],
    ["2c", 2, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk1lhDwop7KTbcZqvOHpPpCgPCaiKDGXKwCUC78SbIBnv5AHhbVbwBki5O6gpznel6AuQgvfzQsqVrzqY6wKcFFVhYoWMjtipQbegIwVpWec7fin1ePS3TBuNvdLP8x3G4pLRjzA8-LZKG/s800/card_club_02.png"],
    ["3c", 3, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZpBsBHzea5346SN4Bl8PDwszvM4ovkTHW_IXTukvhVZQ-_DnzUas7aJRy5XPkVoDnDiurYkpi0JTuaGvyn0APCe46X9iFzNaGgOgMKmJ-k1MU_ro1Cox0Iu33mMtNSovMcJLKYBNrUl-t/s800/card_club_03.png"],
    ["4c", 4, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj74SEtcC5EgqH1RIMQlQUUFpYsXr9GwR24g4lIJJTk58lQfvSDQ9h-ssCLcb6nite0IbuEui0AIGu3OQMskrk3Cif7Rp8SxFhozLCxAunC0dangP5NtSSN7TjbHyyRnHb3Tk6heX7VBQBN/s800/card_club_04.png"],
    ["5c", 5, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDyUx00K6j1cH4UpNs7_UoP6WQAbrrpaKzfQOkTiCYvQBvUR4ehvTda7fKoTgF9vzxbI0r-QcpGSzWnUXJHfgTD5uHEe_bTzoj3WQJSvKPd12hR7NbR2ri4XEVAiRQZzlDCNyOB5MjJnQB/s800/card_club_05.png"],
    ["6c", 6, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSVy56fpOdMWjW7JRoTnuzUisXaKD9oWiexP-uDPDBo2p2xKwmbYVaeBFxD7SiU4GC3fvchi8ZEJ8j-aA7DmTpqNcDWNj7CiwfsSTnQ558CesoqH04ivDLzCp1ewZZksQxX5jf2jud5TJH/s800/card_club_06.png"],
    ["7c", 7, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpcGklyF1eT2kNfRJ4ZxXTe-yD8fHkBwoHpVWzGdJbpXFR2-4iWBoOWg02GB5D3ygYwKYF-l9HSPunQ9qn-_hDnxjqOsaDM8B-LPEAbUVgLeXOUNUbNj70m7zXmykZM2emk-szn0cReuYW/s800/card_club_07.png"],
    ["8c", 8, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxW8UZ9ImLL6UYaAYHSZ-SvGLTqmbjyyIY9_Ov_HVo8e60Ekbe0TMHKYAKmngmaBqbqws4QRT0dKlnYKyqdvZihYJgHcWAACFX51Usylt0DjgaBybSaOlYFbgtqVszXaeuhCkwRoGYVNiU/s800/card_club_08.png"],
    ["9c", 9, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdCKbC_gUVPD05q3SetyYBNGZLejQRWzYy4vYqMxlVvKqK5HZJaAz5HcK2VSC2d4NMtGjtJdrnuOqp7qPwW7ePFd4IfxaOvRrgxNdLKmab3xQ0U838mN0rhIl_YXSo38m54Us1PFe6f0gE/s800/card_club_09.png"],
    ["Tc", 10, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkUeMtfGkd89sn9f_WamZ3Xn3tpL9b2dtUTn51BH-u0wqJtEjkynTTxbdAsuBYQVHSxmg0g9SYvSzOrRSIw1I7TkUJsYvxWU0kT2ohIzrBeK6af-i8zKJCxCNIAiB5RcIfHnrmEh1UTUtl/s800/card_club_10.png"],
    ["Jc", 11, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiigxeATOR1vZg-msbYevcViZqWh7CdIXFunD5y-DVySKCWoUc0rN6tF_-hSahYTdnNY1U5gXTLv2qtmqH29ea4MZwj0__5bH0Tdd8QpH2hSqlPHqZH4WmWTVQb2KRoUoQA_0ZmPv0aOpZ/s800/card_club_11.png"],
    ["Qc", 12, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWeEF9TVPTwLgyveCLohk0EPJPs55-QpDZSEnIR8cOymR68WXKnFu-j9WAuVPM5rn0fOwK0csYTVgbviUcvsRMLDlvWC0RCtOd6mVuYtAA9p_Bx9yM99cqsuQl38OIguC9BDWa2VDRRemE/s800/card_club_12.png"],
    ["Kc", 13, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8X4t7x1kec_STfD_pd7IAR4wpIwnnh-y00whFLEUmV_5chwhhLUJh9TCr5wOQP71mnHWj_2D5yU4MQ-EB0JAoHffTPmybAZ7aNxOPL0ebwQmtGk9RGKwIf7rDoZspwi5n5BeE8Gklt8Sq/s800/card_club_13.png"],
    ["Ac", 14, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCM7wC2QXUNYoHRqawekMLYuEL8nKIO6RjLnF7H2Bu2obbXj-VxfsNxVixxZFKvLDviopKNZoMO-bElrxlMncScE1hN5dr9tTPN15IEtX7aIzQp8_r1CWUx27EYdMkHwOeGVFPKUAzIInL/s800/card_club_01.png"],
    ["2d", 2, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdYXnUSmXMIUPC8p-o8h-G255fArx9POodlvdTZ1ECv-71IKUSOq-ocvU5mtXLq73XMhyS9ccF6AyODkCthJi8-INZdLu9sWL8im6TQVn6g3ut7aDUQ8r45X4jB3t1_k08eZdUWMUvVc_Z/s800/card_diamond_02.png"],
    ["3d", 3, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2NDsxeLe22kW9_BT7w48MRNnV4oMk4WhiMcIvz5sLI0dNGmCvE-jl4bBYmTr3GoPs3rV3a4R4GphD-0kx1CiZ1-Witg-Cn3dXS3319coTVOcbslDH3AoA1VbFdXVoWScFooJFdiz2nVsk/s800/card_diamond_03.png"],
    ["4d", 4, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzdNVbWDwSV2u1F79LEn77EVOlDVl-OS642rh5esLZ7r7f6ZGNFsK_E4fYiQM84noS6XVJDZbrWWl0ksUnjTPrxfbAcqbUWFPVzQValxcYuY83idgv15Tq0ZvfPwF6H7jSQREK5D9QIsow/s800/card_diamond_04.png"],
    ["5d", 5, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieuQbfJXEunrmPkIjSrlCYE-05sC2-mAN0RLJWIeFa7OoSXom-4DvEFnyoX4SowtrS59W4jPxS087HwV-1pwQkimx9yQdr_w5JV0Z98RLDbHJuaZItAkjCPgtH0Xc4CE3aab_1R-x7PRXb/s800/card_diamond_05.png"],
    ["6d", 6, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeuayj1QgbnvlIrod-G_xMdBnxHY0JR7deFe5xS59zqajiH-tyUfw2c572Hsqw8r9f1zdjzxBcG7ITm5ODHEhFYz0a25ddSiQVGNamlE2kU2QQTQDkzPn5p2LiZh6jZyltzBjrBYwthtVu/s800/card_diamond_06.png"],
    ["7d", 7, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHx6Fyf4Gnd9Ljd26YBStWXtART9NVJdaoQyYS5sLQplBPfsEOtBG5OntAq4qBYwk2eQrSmU98-ExQw0UW5_L50mhnSKncWDHwO6SQShhwL9z53MmuK1dNClYed1HibOmVW8tqIQ9iCyGv/s800/card_diamond_07.png"],
    ["8d", 8, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjv2zoWY_-lB4N17WgWR2Es3cpfMgnvuq_wAkM6F4XDnWWUn3gxYim3orh5aaKLpcpDYwR4w8Tiod2qvoA9yewicKVIGFHSwmrz8WjjX9xPPZXPzsYBwdu5DUyXORxaBmdMRn8zVtx_W0mB/s800/card_diamond_08.png"],
    ["9d", 9, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFglq_OJZvb_EZV6Ys_m9V8hn1X2Ie0d7wjCepopRZ9FFy1stOB6_AAm9A_xCI4E2a-v_1dItGkn9rHxx4b-WODE0WHBDqqerod6Ekm8Y9eKPuEo35riFDsqxee7B0oBJYLVyBiA_cK0gf/s800/card_diamond_09.png"],
    ["Td", 10, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBgQ7xe9UX5la0eYvxDY5i1w_XFk-7ZyioXzx90mfdgQVfGdkODe1CADfCz4Q5SV7z0fmB3Dnq0Nuz_1dRjn_Iy7SzuCl58Y1Ku12_taJU4e1wJNXF42QSDKSeqHePnAyUnOwvu_mslBhK/s800/card_diamond_10.png"],
    ["Jd", 11, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnvQfeGeSRoo3waeZ-DfnWKMHiRKTxaQPaRtVB97knDRKh0MEMjZea7FpdMN40puf-70Ng3th58eWYsxOR3KLqh8I_ac_xpPjhIUvY08q2_5fNTTXN9pTkikSvbBFL559IYJHfTYpKMt6E/s800/card_diamond_11.png"],
    ["Qd", 12, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDFLojNfLyaONKCisbhfs3m75tym8usQ5HaZrd9OLItNcnbvEwhq19pZytn_b8lLa0EpRFBRA9jpQ76uNGAySkK85z3vA_1VnLj2vazMq2o4C7h_jx_bJ9xyXGWOHeT-GKYLup17e6xTiW/s800/card_diamond_12.png"],
    ["Kd", 13, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdX3vgTzFcPUfVyLrqwxfDw5EOgZmJSlYph02K70rJnZnGvM9DDG1in0yFM2I7noQO9eY8BMUQ793dHg7_kFO5D7kf14NszLqMsS3XdjQB_tLQR6k2uYRyaz0idBtCbFJlPa09hlxCg1Ou/s800/card_diamond_13.png"],
    ["Ad", 14, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivg9GTYvqK4MaR3khNryk2ASumivjAv0dnRpeaQHSwXLtRfI5UWDMO8MnwI8H-F1sEKb0boCOT6jY_0njcFSJzLkMNPf3qLhstBKAeN8GuDiz_wOWpg17v53FuEiFEQd5iJxExThzWtVnC/s800/card_diamond_01.png"],
]

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        newGame: (state) => {
            // 使うカードを乱数で決める
            const randNum1 = Math.floor( Math.random() * 52);
            const randNum2 = Math.floor( Math.random() * 51);
            const randNum3 = Math.floor( Math.random() * 50);

            // 演出用乱数生成
            const randNum = Math.floor( Math.random() * 10000);
            state.rand = randNum;

            // カード一覧を新しく生成
            const newCards = cards;

            // 1枚目
            state.card1 = newCards[randNum1][1];
            state.card1Url = newCards[randNum1][2];
            const cardsPop1 = newCards.filter((item,index) => index !== randNum1);

            // 2枚目
            state.card2 = cardsPop1[randNum2][1];
            state.card2Url = cardsPop1[randNum2][2];
            const cardsPop2 = cardsPop1.filter((item,index) => index !== randNum2);

            // 3枚目
            state.card3 = cardsPop2[randNum3][1];
            state.card3Url = cardsPop2[randNum3][2];
            
            // ペア
            if(state.card1 === state.card2){
                state.isPair = true;
                state.isWin = true;
                if(state.card1 === state.card3){
                    state.odds = 12;
                }else{
                    state.odds = 1;
                }
            // コンセクティブ
            }else if(state.card1 - state.card2 === 1 || state.card1 - state.card2 === -1){
                state.isWin = true;
                state.isConsecutive = true;
                state.odds = 1;
            // スプレッド
            }else{
                const numMin = state.card1 < state.card2 ? state.card1 : state.card2;
                const numMax = state.card1 > state.card2 ? state.card1 : state.card2;

                const spread = numMax - numMin - 1;
                state.spread = spread;

                switch(spread){
                    case 1:
                        state.odds = 6;
                        break;
                    case 2:
                        state.odds = 5;
                        break;
                    case 3:
                        state.odds = 3;
                        break;
                    default:
                        state.odds = 2;
                }

                if(numMin < state.card3 && numMax > state.card3){
                    state.isWin = true;
                }else{
                    state.isWin = false;
                }
            }
        },

        clearGame: (state) => {
            state.card1 = initialState.card1;
            state.card1Url = initialState.card1Url;
            state.card2 = initialState.card2;
            state.card2Url = initialState.card2Url;
            state.card3 = initialState.card3;
            state.card3Url = initialState.card3Url;
            state.isWin = initialState.isWin;
            state.odds = initialState.odds;
            state.isPair = initialState.isPair;
            state.isConsecutive = initialState.isConsecutive;
            state.spread = initialState.spread;
            state.rand = initialState.rand;
        }
    }
})

export const { newGame, clearGame } = gameSlice.actions;
export default gameSlice.reducer;