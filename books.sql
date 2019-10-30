CREATE DATABASE  IF NOT EXISTS `listbookdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `listbookdb`;
-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: listbookdb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `publish` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `content` text,
  `numberOfPages` int(11) DEFAULT NULL,
  `companyIssued` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Lão Hạc','Nam Văn Cao',2002,102,'1.jpg',5,'Lão Hạc thổi cái mồi rơm, châm đóm. Tôi đã thông điếu và bỏ thuốc rồi. Tôi mời lão hút trước. Nhưng lão không nghe...\n\n- Ông giáo hút trước đi.\n\nLão đưa đóm cho tôi...\n\n- Tôi xin cụ...\n\nVà tôi cầm lấy đóm, vo viên một điếu. Tôi rít một hơi xong, thông điếu rồi mới đặt vào lòng lão. Lão bỏ thuốc, nhưng chưa hút vội. Lão cầm lấy đóm, gạt tàn, và bảo:\n\n- Có lẽ tôi bán con chó đấy, ông giáo ạ!\n\nLão đặt xe điếu, hút. Tôi vừa thở khói, vừa gà gà đôi mắt của người say, nhìn lão, nhìn để làm ra vẻ chú ý đến câu nói của lão đó thôi. Thật ra thì trong lòng tôi rất dửng dưng. Tôi nghe câu ấy đã nhàm rồi. Tôi lại biết rằng: lão nói là nói để có đấy thôi; chẳng bao giờ lão bán đâu. Vả lại, có bán thật nữa thì đã sao? Làm quái gì một con chó mà lão có vẻ băn khoăn quá thế...\n\nLão hút xong, đặt xe điếu cuống, quay ra ngoài, thở khói. Sau một điếu thuốc lào, óc người ta tê dại đi trong một nỗi đê mê nhẹ nhõm. Lão Hạc ngồi lặng lẽ, hưởng chút khoái lạc con con ấy. Tôi cũng ngồi lặng lẽ. Tôi nghĩ đến mấy quyển sách quý của tôi. Hồi bị ốm nặng ở Sài Gòn tôi bán gần hết cả áo quần, nhưng vẫn không chịu bán cho ai một quyển. Ốm dậy, tôi về quê, hành lý chỉ vẻn vẹn có một cái va-ly đựng toàn những sách. Ôi những quyển sách rất nâng niu! Tôi đã nguyện giữ chúng suốt đời, để lưu lại cái kỷ niệm một thời chăm chỉ, hăng hái và tin tưởng đầy những say mê đẹp và cao vọng: mỗi lần mở một quyển ra, chưa kịp đọc dòng nào, tôi đã thấy bừng lên trong lòng tôi như một rạng đông, cái hình ảnh tuổi hai mươi trong trẻo, biết yêu và biết ghét... Nhưng đời người ta không chỉ khổ một lần. Mỗi lần cùng đường đất sinh nhai, và bán hết mọi thứ rồi, tôi lại phải bán đi một ít sách của tôi. Sau cùng chỉ còn có năm quyển, tôi nhất định, dù có phải chết cũng không chịu bán. Ấy thế mà tôi cũng bán! Mới cách đây có hơn một tháng thôi, đứa con nhỏ của tôi bị chứng lỵ gần kiệt sức... Không! Lão Hạc ơi! Ta có quyền giữ cho ta một tí gì đâu? Lão quý con chó vàng của lão đã thấm vào đâu với tôi quý năm quyển sách của tôi...\n\nTôi nghĩ thầm trong bụng thế. Còn lão Hạc, lão nghĩ gì? Đột nhiên lão bảo tôi:\n\n- Này! Thằng cháu nhà tôi, đến một năm nay, chẳng có giấy má gì đấy, ông giáo ạ!\n\nÀ! Thì ra lão đang nghĩ đến thằng con lão. Nó đi cao su năm sáu năm rồi. Hồi tôi mới về, nó đã hết một hạn công-ta. Lão Hạc, đem thư của nó sang, mượn tôi xem. Nhưng nó xin đăng thêm một hạn nữa... Lão vội cắt nghĩa cho tôi hiểu tại sao lão đang nói chuyện con chó, lại nhảy vọt sang chuyện thằng con như vậy:\n\n- Con chó là của cháu nó mua đấy chứ!... Nó mua về nuôi, định để đến lúc cưới vợ thì giết thịt...\n\nẤy! Sự đời lại cứ thường như vậy đấy. Người ta đã định rồi chẳng bao giờ người ta làm được. Hai đứa mê nhau lắm. Bố mẹ đứa con gái biết vậy, nên cũng bằng lòng gả. Nhưng họ thách nặng quá: nguyên tiền mặt phải một trăm đồng bạc, lại còn cau, còn rượu... cả cưới nữa thì mất đến cứng hai trăm bạc. Lão Hạc không lo được. Ý thằng con lão, thì nó muốn bán vườn, cố lo cho bằng được. Nhưng lão không cho bán. Ai lại bán vườn đi mà lấy vợ? Vả lại bán vườn đi, thì cưới vợ về, ở đâu? Với lại, nói cho cùng nữa, nếu đằng nhà gái họ cứ khăng khăng đòi như vậy, thì dẫu có bán vườn đi cũng không đủ cưới. Lão Hạc biết vậy đấy, nhưng cũng không dám xẵng. Lão tìm lời lẽ giảng giải cho con trai hiểu. Lão khuyên nó hãy dằn lòng bỏ đám này, để rồi gắng lại ít lâu, xem có đám nào khác mà nhẹ tiền hơn sẽ liệu; chẳng lấy đứa này thì lấy đứa khác; làng này đã chết hết con gái đâu mà sợ?... Lạy trời lạy đất! Nó cũng là thằng khá, nó thấy bố nói thế thì nó thôi ngay, nó không đả động đến việc cưới xin nữa. Nhưng nó có vẻ buồn. Và lão biết nó vẫn theo đuổi con kia mãi. Lão thương con lắm. Nhưng biết làm sao được?... Tháng mười năm ấy, con kia đi lấy chồng; nó lấy con trai một ông phó lý, nhà có của. Thằng con lão sinh phẫn chí. Ngay mấy hôm sau, nó ra tỉnh đến sở mộ phu, đưa thẻ, ký giấy xin đi làm đồn điền cao su...\n\nLão rân rấn nước mắt, bảo tôi:\n\n- Trước khi đi, nó còn cho tôi ba đồng bạc, ông giáo ạ! Chả biết nó gửi thẻ xong, vay trước được mấy đồng, mà đưa về cho tôi ba đồng. Nó đưa cho tôi ba đồng mà bảo: “Con biếu thầy ba đồng để thỉnh thoảng thầy ăn quà; xưa nay con ở nhà mãi cũng không nuôi được bữa nào, thì con đi cũng chẳng phải lo; thầy bòn vườn đất với làm thuê làm mướn thêm cho người ta thế nào cũng đủ ăn; con đi chuyến này cố chí làm ăn, bao giờ có bạc trăm con mới về, không có tiền, sống khổ sống sở ở cái làng này, nhục lắm!...”. Tôi chỉ còn biết khóc, chứ còn biết làm sao được nữa? Thẻ của nó, người ta giữ. Hình của nó, người ta chụp rồi. Nó lại đã lấy tiền của người ta. Nó là người của người ta rồi, chứ đâu còn là con tôi?...\n\n*\n\n* *\n\nLão Hạc ơi! Bây giờ thì tôi hiểu tại sao lão không muốn bán con chó vàng của lão. Lão chỉ còn một mình nó để làm khuây. Vợ lão chết rồi. Con lão đi bằn bặt. Già rồi mà ngày cũng như đêm, chỉ thui thủi một mình thì ai mà chả phải buồn? Những lúc buồn, có con chó làm bạn thì cũng đỡ buồn một chút. Lão gọi nó là cậu Vàng như một bà hiếm hoi gọi đứa con cầu tự. Thỉnh thoảng không có việc gì làm, lão lại bắt rận cho nó hay đem nó ra ao tắm. Lão cho nó ăn cơm trong một cái bát như một nhà giàu. Lão ăn gì lão cũng chia cho nó cùng ăn. Những buổi tối, khi lão uống rượu, thì nó ngồi ở dưới chân. Lão cứ nhắm vài miếng lại gắp cho nó một miếng như người ta gắp thức ăn cho con trẻ. Rồi lão chửi yêu nó, lão nói với nó như nói với một đứa cháu bé về bố nó. Lão bảo nó thế này:\n\n- Cậu có nhớ bố cậu không? Hả cậu Vàng? Bố cậu lâu lắm không có thư về. Bố cậu đi có lẽ được đến ba năm rồi đấy... Hơn ba năm... Có đến ngót bốn năm... Không biết cuối năm nay bố cậu có về không? Nó mà về, nó cưới vợ, thì nó giết cậu. Liệu hồn cậu đấy!\n\nCon chó vẫn hếch mõm lên nhìn, chẳng lộ một vẻ gì; lão lừ mắt nhìn trừng trừng vào mắt nó, to tiếng dọa:\n\n- Nó giết mày đấy! Mày có biết không? Ông cho thì bỏ bố!\n\nCon chó tưởng chủ mắng, vẫy đuôi mừng, để lấy lại lòng chủ. Lão Hạc nạt to hơn nữa:\n\n- Mừng à? Vẫy đuôi à? Vẫy đuôi thì cũng giết! Cho cậu chết!\n\nThấy lão sừng sộ quá, con chó vừa vẫy đuôi, vừa chực lảng. Nhưng lão vội nắm lấy nó, ôm đầu nó, đập nhè nhẹ vào lưng nó và dấu dí:\n\n- À không! À không! Không giết cậu Vàng đâu nhỉ!... Cậu Vàng của ông ngoan lắm! Ông không cho giết... Ông để cậu Vàng ông nuôi...\n\nLão buông nó ra để nhấc chén, ghé lên môi uống. Lão ngẩn mặt ra một chút, rồi bỗng nhiên thở dài. Rồi lão lẩm bẩm tính. Đấy là lão tính tiền bòn vườn của con...\n\nSau khi thằng con đi, lão tự hỏi rằng: “Cái vườn là của con ta. Hồi còn mồ ma mẹ nó, mẹ nó cố thắt lưng buộc bụng, dè sẻn mãi, mới để ra được năm mươi đồng bạc tậu. Hồi ấy, mọi thức còn rẻ cả... Của mẹ nó tậu, thì nó hưởng. Lớp trước nó đòi bán, ta không cho bán là ta có ý giữ cho nó, chứ có phải giữ để ta ăn đâu? Nó không có tiền cưới vợ, phẫn chí bước ra đi, thì đến lúc có tiền để lấy vợ, mới chịu về. Ta bòn vườn của nó, cũng nên để ra cho nó; đến lúc nó về, nếu nó không đủ tiền cưới vợ thì ta thêm vào với nó, nếu nó có đủ tiền cưới vợ, thì ta cho vợ chồng nó để có chút vốn mà làm ăn...”. Lão tự bảo lão như thế, và lão làm đúng như thế. Lão làm thuê kiếm ăn. Hoa lợi của khu vườn được bao nhiêu, lão để riêng ra. Lão chắc mẩm thế nào đến lúc con lão về, lão cũng có được một trăm đồng bạc...\n\nLão lắc đầu chán nản, bảo tôi:\n\n- Ấy thế mà bây giờ hết nhẵn, ông giáo ạ! Tôi chỉ ốm có một trận đấy thôi. Một trận đúng hai tháng, mười tám ngày, ông giáo ạ! Hai tháng mười tám ngày đã không làm ra được một xu, lại còn thuốc, lại còn ăn... Ông thử tính ra xem bao nhiêu tiền vào đấy?...\n\nSau trận ốm, lão yếu người đi ghê lắm. Những công việc nặng không làm được nữa. Làng mất vè sợi, nghề vải đảnh phải bỏ. Đàn bà rỗi rãi nhiều. Còn tí việc nhẹ nào, họ tranh nhau làm mất cả. Lão Hạc không có việc. Rồi lại bão. Hoa mầu bị phá sạch sành sanh. Từ ngày bão đến nay, vườn lão chưa có một tí gì bán. Gạo thì cứ kém mãi đi. Một lão với một con chó mỗi ngày ba hào gạo, mà gia sự vẫn còn đói deo đói dắt...\n\n- Thì ra cậu Vàng cậu ấy ăn khỏe hơn cả tôi ông giáo ạ. Mỗi ngày cậu ấy ăn thế, bỏ rẻ cũng mất hào rưỡi, hai hào đấy. Cứ mãi thế này thì tôi lấy tiền đâu mà nuôi được? Mà cho cậu ấy ăn ít thì cậu ấy gày đi, bán hụt tiền, có phải hoài không? Bây giờ cậu ấy béo trùng trục, mua đắt, người ta cũng thích...\n\nLão ngắt lại một chút, rồi tắc lưỡi:\n\n- Thôi thì bán phắt đi! Đỡ được đồng nào, hay đồng ấy. Bây giờ tiêu một xu cũng là tiêu vào tiền của cháu. Tiêu lắm chỉ chết nó. Tôi bây giờ có làm gì được đâu?\n\n*\n\n* *\n\nHôm sau lão Hạc sang nhà tôi. Vừa thấy tôi, lão báo ngay:\n\n- Cậu Vàng đi đời rồi, ông giáo ạ!\n\n- Cụ bán rồi?\n\n- Bán rồi? Họ vừa bắt xong.\n\nLão cố làm ra vẻ vui vẻ. Nhưng trông lão cười như mếu và đôi mắt lão ầng ậng nước, tôi muốn ôm choàng lấy lão mà òa lên khóc. Bây giờ thì tôi không xót năm quyển sách của tôi quá như trước nữa. Tôi chỉ ái ngại cho lão Hạc. Tôi hỏi cho có chuyện:\n\n- Thế nó cho bắt à?\n\nMặt lão đột nhiên co dúm lại. Những vết nhăn xô lại với nhau, ép cho nước mắt chảy ra. Cái đầu lão ngoẹo về một bên và cái miệng móm mém của lão mếu như con nít. Lão hu hu khóc...\n\n- Khốn nạn... Ông giáo ơi! Nó có biết gì đâu! Nó thấy tôi gọi về thì chạy ngay về, vẫy đuôi mừng. Tôi cho nó ăn cơm. Nó đang ăn thì thằng Mục nấp trong nhà, ngay đằng sau nó, tóm lấy hai cẳng sau nó dốc ngược nó lên. Cứ thế là thằng Mục với thằng Xiên, hai thằng chúng nó chỉ loay hoay một lúc đã trói chặt cả bốn chân nó lại. Bấy giờ cu cậu mới biết là cu cậu chết! Này! Ông giáo ạ! Cái giống nó cũng khôn! Nó cứ làm in như nó trách tôi; nó kêu ư ử, nhìn tôi như muốn bảo tôi rằng: “A! Lão già tệ lắm! Tôi ăn ở với lão như thế mà lão xử với tôi như thế này?”. Thì ra tôi già bằng này tuổi đầu rồi còn đánh lừa một con chó, nó không ngờ tôi nỡ tâm lừa nó!\n\nTôi an ủi lão:\n\n- Cụ cứ tưởng thế đấy chứ nó chả hiểu đâu! Vả lại ai nuôi chó mà chả bán hay giết thịt? Ta giết nó chính là hóa kiếp cho nó đấy, hóa kiếp để cho nó làm kiếp khác.\n\nLão chua chát bảo:\n\n- Ông giáo nói phải! Kiếp con chó là kiếp khổ thì ta hóa kiếp cho nó để nó làm kiếp người, may ra có sung sướng hơn một chút... kiếp người như kiếp tôi chẳng hạn!...\n\nTôi bùi ngùi nhìn lão bảo:\n\n- Kiếp ai cũng thế thôi, cụ ạ! Cụ tưởng tôi sung sướng hơn chăng?\n\n- Thế thì không biết nếu kiếp người cũng khổ nốt thì ta nên làm gì cho thật sướng?\n\nLão cười và ho sòng sọc. Tôi nắm lấy cái vai gầy của lão, ôn tồn bảo:\n\n- Chẳng kiếp gì sung sướng thật, nhưng có cái này là sung sướng: Bây giờ cụ ngồi xuống phản này chơi, tôi đi luộc mấy củ khoai lang, nấu một ấm nước chè tươi thật đặc; ông con mình ăn khoai, uống nước chè, rồi hút thuốc lào... Thế là sướng.\n\n- Vâng! Ông giáo dạy phải! Đối với chúng mình thì thế là sung sướng.\n\nLão nói xong lại cười đưa đà. Tiếng cười gượng nhưng nghe đã hiền hậu lại. Tôi vui vẻ bảo:\n\n- Thế là được, chứ gì? Vậy cụ ngồi xuống đây, tôi đi luộc khoai, nấu nước.\n\n- Nói đùa thế, chứ ông giáo cho để khi khác?...\n\n- Việc gì còn phải chờ khi khác?... Không bao giờ nên hoãn sự sung sướng lại. Cụ cứ ngồi xuống đây! Tôi làm nhanh lắm...\n\n- Đã biết, nhưng tôi còn muốn nhờ ông một việc...\n\nMặt lão nghiêm trang lại...\n\n- Việc gì thế, cụ?\n\n- Ông giáo để tôi nói... Nó hơi dài dòng một tí.\n\n- Vâng, cụ nói.\n\n- Nó thế này, ông giáo ạ!\n\nVà lão kể. Lão kể nhỏ nhẹ và dài dòng thật. Nhưng đại khái có thể rút vào hai việc. Việc thứ nhất: Lão thì già, con đi vắng, vả lại nó cũng còn dại lắm, nếu không có người trông nom cho thì khó mà giữ được vườn đất để làm ăn ở làng này. Tôi là người nhiều chữ nghĩa, nhiều lý luận, người ta kiêng nể, vậy lão muốn nhờ tôi cho lão gửi ba sào vườn của thằng con lão, lão viết văn tự nhượng cho tôi để không ai còn tơ tưởng dòm ngó đến; khi nào con lão về thì nó sẽ nhận vườn làm, nhưng văn tự cứ để tên tôi cũng được, để thế để tôi trông coi cho nó... Việc thứ hai: Lão già yếu lắm rồi, không biết sống chết lúc nào: con không có nhà, lỡ chết không biết ai đứng ra lo cho được; để phiền cho hàng xóm thì chết không nhắm mắt: lão còn được hăm nhăm đồng bạc với năm đồng vừa bán chó là ba mươi đồng bạc, muốn gửi tôi để lỡ có chết thì tôi đem ra, nói với hàng xóm giúp, gọi là của lão có tí chút, còn bao nhiêu đành nhờ hàng xóm cả...\n\nTôi bật cười bảo lão:\n\n- Sao cụ lo xa quá thế? Cụ còn khỏe lắm, chưa chết đâu mà sợ! Cụ cứ để tiền ấy mà ăn, lúc chết hãy hay! Tội gì bây giờ nhịn đói mà tiền để lại?\n\n- Không, ông giáo ạ! Ăn mãi hết đi thì đến lúc chết lấy gì mà lo liệu? Đã đành rằng là thế, nhưng tôi bòn vườn của nó bao nhiêu, tiêu hết cả. Nó vợ con chưa có. Ngộ nó không lấy gì lo được, lại bán vườn thì sao?... Tôi cắn rơm, cắn cỏ tôi lạy ông giáo! Ông giáo có nghĩ cái tình tôi già nua tuổi tác mà thương thì ông giáo cứ cho tôi gửi.\n\nThấy lão nằn nì mãi, tôi đành nhận vậy. Lúc lão ra về, tôi còn hỏi:\n\n- Có đồng nào, cụ nhặt nhạnh đưa cho tôi cả thì cụ lấy gì mà ăn?\n\nLão cười nhạt bảo:\n\n- Được ạ! Tôi đã liệu đâu vào đấy... Thế nào rồi cũng xong.\n\nLuôn mấy hôm, tôi thấy lão Hạc chỉ ăn khoai. Rồi thì khoai cũng hết. Bắt đầu từ đấy, lão chế tạo được món gì, ăn món ấy. Hôm thì lão ăn củ chuối, hôm thì lão ăn sung luộc, hôm thì ăn rau má, với thỉnh thoảng một vài củ ráy, hay bữa trai, bữa ốc. Tôi nói chuyện lão với vợ tôi. Thị gạt phắt đi:\n\n- Cho lão chết! Ai bảo lão có tiền mà chịu khổ! Lão làm lão khổ chứ ai làm lão khổ! Nhà mình sung sướng gì mà giúp lão? Chính con mình cũng đói...\n\nChao ôi! Đối với những người ở quanh ta, nếu ta không cố tìm mà hiểu họ, thì ta chỉ thấy họ gàn dở, ngu ngốc, bần tiện, xấu xa, bỉ ổi... toàn những cớ để cho ta tàn nhẫn; không bao giờ ta thấy họ là những người đáng thương: không bao giờ ta thương... Vợ tôi không ác, nhưng thị khổ quá rồi. Một người đau chân có lúc nào quên được cái chân đau của mình để nghĩ đến một cái gì khác đâu? Khi người ta khổ quá thì người ta chẳng còn nghĩ gì đến ai được nữa. Cái bản tính tốt của người ta bị những nỗi lo lắng, buồn đau ích kỷ che lấp mất. Tôi biết vậy, nên tôi chỉ buồn chứ không nỡ giận. Tôi giấu giếm vợ tôi, thỉnh thoảng giúp ngấm ngầm lão Hạc. Nhưng hình như lão cũng biết vợ tôi không ưng giúp lão. Lão từ chối tất cả những cái gì tôi cho lão. Lão từ chối một cách gần như là hách dịch. Và lão cứ xa tôi dần dần...\n\nLão không hiểu tôi, tôi nghĩ vậy, và tôi càng buồn lắm. Những người nghèo nhiều tự ái vẫn thường như thế. Họ dễ tủi thân nên rất hay chạnh lòng. Ta khó mà ở cho vừa ý họ... Một hôm, tôi phàn nàn về việc ấy với binh Tư. Binh Tư là một người láng giềng khác của tôi: Hắn làm nghề ăn trộm nên vốn không ưa lão Hạc bởi vì lão lương thiện quá. Hắn bĩu môi và bảo:\n\n- Lão làm bộ đây! Thật ra thì lão chỉ tâm ngẩm thế, nhưng cũng ra phết chứ chả vừa đâu. Lão vừa xin tôi một ít bả chó...\n\nTôi trố to đôi mắt, ngạc nhiên. Hắn thì thầm:\n\n- Lão bảo có con chó nhà nào cứ đến vườn nhà lão... Lão định cho nó xơi một bữa. Nếu trúng, lão với tôi uống rượu.\n\nHỡi ơi lão Hạc! Thì ra đến lúc cùng lão cũng có thể làm liều như ai hết. Một người như thế ấy!... Một người đã khóc vì trót lừa một con chó!... Một người nhịn ăn để tiền lại làm ma, bởi không muốn liên lụy đến hàng xóm, láng giềng... Con người đáng kính ấy bây giờ cũng theo gót binh Tư để có ăn ư? Cuộc đời quả thật cứ một ngày một thêm đáng buồn...\n\n*\n\n* *\n\nKhông! Cuộc đời chưa hẳn đã đáng buồn, hay vẫn đáng buồn nhưng lại đáng buồn theo một nghĩa khác. Tôi ở nhà binh Tư về được một lúc lâu thì thấy những tiếng nhốn nháo ở bên nhà lão Hạc. Tôi mải mốt chạy sang. Mấy người hàng xóm đến trước tôi đang xôn xao ở trong nhà. Tôi xồng xộc chạy vào. Lão Hạc đang vật vã ở trên giường, đầu tóc rũ rượi, quần áo xộc xệch, hai mắt long sòng sọc. Lão tru tréo, bọt mép sùi ra, khắp người chốc chốc lại bị giật mạnh một cái, nẩy lên. Hai người đàn ông lực lưỡng phải ngồi đè lên người lão. Lão vật vã đến hai giờ đồng hồ rồi mới chết. Cái chết thật là dữ dội. Chẳng ai hiểu lão chết vì bệnh gì mà đau đớn và bất thình lình như vậy. Chỉ có tôi với binh Tư hiểu. Nhưng nói ra làm gì nữa! Lão Hạc ơi! Lão hãy yên lòng mà nhắm mắt! Lão đừng lo gì cho cái vườn của lão. Tôi sẽ cố giữ gìn cho lão. Đến khi con trai lão về, tôi sẽ trao lại cho hắn và bảo hắn: “Đây là cái vườn mà ông cụ thân sinh ra anh đã cố để lại cho anh trọn vẹn: cụ thà chết chứ không chịu bán đi một sào...”.',3,'Kim Đồng'),(2,'Conan','Aoyama',2000,12000,'2.jpg',20,'Kudo Shinichi là một thám tử trung học rất nổi tiếng, thường xuyên giúp cảnh sát phá giải các vụ án khó khăn.[2] Trong một lần khi đang điều tra, cậu bị thành viên của Tổ chức Áo đen phát hiện. Chúng ép cậu uống thử loại thuốc teo nhỏ (APTX 4869) tổ chức vừa điều chế ra nhưng chất độc này không giết chết cậu mà khiến cơ thể cậu teo nhỏ thành hình dạng một đứa trẻ.[3] Sau đó, cậu đổi tên thành Edogawa Conan sống tại nhà thám tử Mori Kogoro. Xuyên suốt xê-ri cậu âm thầm hỗ trợ phá các vụ án bên cạnh ông Mori.[4] Đồng thời cậu cũng phải đi học lại tiểu học, kết bạn được nhiều người và lập ra Đội thám tử nhí.\n\nVề sau một học sinh tiểu học bất đắc dĩ khác tên là Haibara Ai tiết lộ rằng cô ấy chính là người đã tạo ra thuốc teo nhỏ, vì muốn tách khỏi Tổ chức nên đã uống loại thuốc độc APTX4869 (cùng loại thuốc mà Conan bị ép uống) và cơ thể cũng bị teo nhỏ như Conan.[5] Trong một vài vụ án liên quan đến Tổ chức Áo đen, Conan đã hỗ trợ các điệp viên của FBI và CIA.[6] Mới đây tác giả Aoyama đã tiết lộ một thông tin gây chấn động khi công bố ông trùm của tổ chức áo đen trong tập 95 đã được ra mắt ở Nhật. Thông tin này đã gây chấn động cho fan của bộ truyện tranh này khi bấy lâu nay họ vẫn nghĩ ông trùm là người thân mật với Conan.\n\nNăm 2007, Aoyama đã lên kế hoạch cho cái kết cho xê-ri nhưng đến hiện tại vẫn chưa ra mắt',66,'Nokia'),(3,'Đô rê mon','Gosho',2000,20000,'3.jpg',20,'Doraemon là tác phẩm của Fujiko Fujio, bút danh chung của hai họa sĩ manga Fujimoto Hiroshi và Abiko Motoo. Bộ truyện ra mắt lần đầu tiên vào tháng 12 năm 1969[3] dành cho độc giả là các kodomo (thiếu nhi). Theo như lời tác giả Hiroshi thì trong một buổi tối, lúc đang bí đề tài cho nhân vật truyện tranh mới thì bỗng có một con mèo hoang mò vào tìm chỗ ngủ. Quá mệt mỏi, ông ngủ thiếp đi lúc nào không biết. Sáng hôm sau, ông tỉnh dậy thì đã muộn giờ làm liền bật dậy và bước xuống nhà. Bỗng ông dẫm phải con lật đật của cô con gái, khi đó ông bỗng nảy ra ý tưởng tạo ra nhân vật mới có hình dáng kết hợp của một con mèo với lật đật, đó chính là hình dáng của nhân vật Doraemon sau này.[3] Một số tập có thể có nội dung nhạy cảm cũng nên chú ý trước khi xem.\n\nBan đầu các câu chuyện lẻ Doraemon được nhà xuất bản Shogakukan phát hành đồng loạt trên sáu tập san dành cho trẻ em. Các tạp chí này được đặt tên theo các cấp học của trẻ nhỏ, đó là Yoiko (nhà trẻ), Yōchien (mẫu giáo), và từ Shogaku Ichinensei (lớp Một) cho đến Shogaku Yonnensei (lớp Bốn). Từ năm 1973, bộ truyện được phát hành thêm trên hai tạp chí Shogaku Gogensei (lớp Năm) và Shogaku Rokunensei (lớp Sáu). Các câu chuyện trên mỗi tạp chí là khác nhau, đồng nghĩa với việc tác giả phải sáng tác ít nhất là 6 câu chuyện mỗi tháng. Từ năm 1974, các câu chuyện nhỏ của Doraemon bắt đầu được tập hợp trong các tập truyện dày, từ năm 1974 đến năm 1996 đã có tổng cộng 45 tập truyện như vậy ra đời[4]. Năm 1977, tạp chí truyện tranh CoroCoro Comic đã ra đời như một tạp chí chuyên về Doraemon. Các manga gốc của các bộ phim Doraemon cũng được phát hành trên CoroCoro Comic. Năm 2005 Shogakukan đã phát hành chuỗi năm tập manga với tên Đội quân Doraemon (tên cũ: Đôrêmon thêm) với những câu chuyện không có trong 45 tập xuất bản gốc. Từ năm 1987 hai tác giả Hiroshi và Motoo không còn dùng chung bút danh Fujiko F. Fujio, khi đó chỉ còn ông Fujimoto là người sáng tác Doraemon với bút danh \"Fujiko F. Fujio\" (bút danh của ông Motoo khi này là \"Fujiko Fujio (A)\"). Ngay cả sau khi ông Fujimoto qua đời năm 1996, các tập truyện, phim ngắn và phim dài của Doraemon vẫn tiếp tục được phát hành và tiêu thụ mạnh tại Nhật Bản. Tính cho đến năm 1999 đã có khoảng 100 triệu tập Doraemon được tiêu thụ tính riêng ở Nhật (khoảng 1,5 đến 2 triệu bản được bán hết mỗi năm), bên cạnh đó là 2000 tập phim ngắn được phát sóng (kể từ năm 1979) và 33 tập phim dài được phát hành (kể từ năm 1980) với lượng khán giả đến rạp lên tới 63 triệu lượ',20,'HiBar'),(4,'Vợ nhặt','Kim Lân',1999,1000,'4.png',5,'Năm 1945, nạn đói khủng khiếp xảy ra tràn lan khắp nơi, người chết như rạ, người sống cũng dật dờ như những bóng ma. Tràng là một người xấu xí thô kệch, ế vợ, sống ở xóm ngụ cư. Tràng làm nghề kéo xe bò thuê và sống với một mẹ già. Một lần kéo xe thóc Liên đoàn lên tỉnh, Tràng đã quen với một cô gái. Vài ngày sau gặp lại, Tràng không còn nhận ra cô gái ấy, bởi vẻ tiều tụy, đói rách làm cô đã khác đi rất nhiều. Tràng đã mời cô gái một bữa ăn, cô gái liền ăn một lúc bốn bát bánh đúc. Sau một câu nói nửa thật, nửa đùa, cô gái đã theo anh về nhà làm vợ. Việc Tràng nhặt được vợ đã làm cả xóm ngụ cư ngạc nhiên, nhất là bà cụ Tứ (mẹ Tràng) đón nhận người con dâu trong tâm trạng vừa buồn vừa mừng, vừa lo âu, vừa hi vọng nhưng không hề tỏ ra rẻ rúng người phụ nữ đã theo không con mình. Đêm tân hôn của họ diễn ra trong không khí chết chóc, tủi sầu từ xóm ngụ cư vọng tới. Sáng hôm sau, một buổi sáng mùa hạ, nắng chói lói. Bà cụ Tứ và cô dâu mới xăm xắn dọn dẹp, quét tước trong ngoài. Trước cảnh ấy, Tràng cảm thấy mình gắn bó và có trách nhiệm với cái nhà của mình và thấy mình nên người, trông người vợ đúng là một người phụ nữ hiền hậu đúng mực, không còn vẻ gì chao chát chỏng lỏn như lần đầu gặp nhau. Bà cụ Tứ hồ hởi đãi hai con vài bát cháo loãng và một nồi chè cám. Qua lời kể của người vợ, Tràng dần dần hiểu được Việt Minh và trong óc Tràng hiện lên hình ảnh đám người đói kéo nhau đi phá kho thóc Nhật, phía trước là một lá cờ đỏ bay phấp phới.',111,'Nhà xuất bản Văn học'),(6,'Sông ngầm','Lôi Mễ',1999,100000,'6.webp',19,'Loạt tiểu thuyết best-seller của Lôi Mễ lấy nhân vật trung tâm là cảnh sát Phương Mộc. Trong “Sông Ngầm”, Phương Mộc sẽ phá đường dây buôn người đầy thế lực ở Trung Quốc.\n\nỞ một nơi mà ánh mặt trời chưa chiếu rọi qua, có một dòng sông ngầm lặng lẽ, trên con sông này, chảy xuôi là bạo lực, máu tươi hoà cùng tuyệt vọng. Khi một người lòng đầy đen tối, tội ác liền sinh sôi từ đó.\n\nCục trưởng cục cảnh sát chính tay bắn chết một kẻ giết người, thi thể nạn nhân lại biến mất, là một trò lừa bịp, hay là một âm mưu lớn? Sự mất tích bí ẩn của một diễn viên nổi tiếng, kẻ bắt cóc đã gửi những hình ảnh khiếm nhã nhằm che dấu những điều bí ẩn.\n\nĐúng lúc nghìn cân treo sợi tóc, làm sao phá giải mật mã để ngăn cản tai hoạ đổ xuống đầu? Hắn, là đồng đội kề vai sát cánh, hay là kẻ ác, rắp tâm phá hoại? Trong rừng núi yên tĩnh hoang vắng, tiếng kêu cứu tuyệt vọng chỉ được trả lời bằng sự im lặng của đất trời.\n\nThôn làng xa xôi thần bí, cuộc sống sung túc và sự trống rỗng của tâm hồn. Cứu vớt, truy đuổi, giết chóc, thức tỉnh, hết thảy đều diễn ra tại nơi âm u sâu thẳm kia. Ai đang nói dối? Ai đã phản bội? Ai gào thét trong 1500 độ thép nóng chảy? Ai ở trong bước đường cùng không khuất phục vẫn kháng cự lại?',199,'LK'),(8,'3123','12312',213,213,'8.jpg',5,'12312',123,'12312'),(9,'213','213',213,213,'9.webp',5,'213',123,'213'),(10,'12312321','123123',123,213,'10.jpg',19,'1231',123,'123'),(11,'ánh sáng thành phố','123123',213123,123123,'11.png',19,'213',213123,'213'),(12,'1231','23123',123123,12312,'12.png',18,'123123',12312,'12312'),(13,'123123','123123',123123,123123,'13.png',19,'12312',12312,'12312');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `catalog` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (5,'TRUYỆN VIỆT NAM','okk',0),(18,'TRuyện nước ngoài','adasda',0),(19,'TRuyện trung quốc','dsdas',18),(20,'TRuyện Nhật Bản','ádas',18),(26,'giáo dục','alo',0),(27,'Văn học','ád',26),(28,'Toán học','dá',26),(29,'Sử học','ádsad',26);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rule` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'kien1919','kien','yes'),(4,'kien2929','kien12','no'),(5,'kien2926','kkkk','no'),(6,'admin','admin','yes'),(7,'user','user','no');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'listbookdb'
--

--
-- Dumping routines for database 'listbookdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-16  7:23:54
