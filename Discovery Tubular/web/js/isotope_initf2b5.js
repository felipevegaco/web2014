jQuery(function($){$(window).load(function(){function rcPortfolioIsotope(){var $container=$('.portfolio-content');$container.imagesLoaded(function(){$container.isotope({itemSelector:'.portfolio-item',masonry:{columnWidth:240}});});}rcPortfolioIsotope();$('.filter a').click(function(){var selector=$(this).attr('data-filter');$('.portfolio-content').isotope({filter:selector});$(this).parents('ul').find('a').removeClass('active');$(this).addClass('active');return false;});var isIE8=$.browser.msie&&+$.browser.version===8;if(isIE8){document.body.onresize=function(){rcPortfolioIsotope();};}else{$(window).resize(function(){rcPortfolioIsotope();});}
window.addEventListener("orientationchange",function(){rcPortfolioIsotope();});});});