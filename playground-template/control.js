<div class="at-wrap loading">
    <div class="at-overlay">
        <div class="at-overlay-content">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
        </div>
    </div>
    <div class="at-content" >
        <div class="at-sidebar">
            <div class="at-sidebar-content">
                <div class="at-track-list"></div>
            </div>
        </div>
        <div class="at-viewport" >
            <div class="at-canvas"
                 id="alphaTab"
                 data-file="pu/gtp/canon.gp"
                 data-player-scrolloffsetx="-10"
                 data-notation-notationmode="songbook"
                 data-player-enableplayer="true"
                 data-player-soundfont="/dist/font/sonivox.sf2"
                 data-notation-rhythmmode="2"


 

            ></div>
        </div>
    </div>
    <div class="at-footer">
        <div class="at-time-slider">
            <div class="at-time-slider-value"></div>
        </div>
        <div class="at-player">
            
            <div class="at-player-left">
                <a href="#" class="at-stop disabled" data-toggle="tooltip" data-placement="top" title="Stop">
                    <i class="fas fa-step-backward"></i>
                </a>

                <a
                    href="#"
                    class="at-play-pause disabled"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Play/Pause"
                >
                    <i class="fas fa-play"></i>
                </a>

                <div class="btn-group dropup">
                    <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i class="fas fa-search"></i>
                        <span class="at-speed-label">1x</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu at-speed-options">
                        <a class="dropdown-item" href="#">0.25x</a>
                        <a class="dropdown-item" href="#">0.5x</a>
                        <a class="dropdown-item" href="#">0.75x</a>
                        <a class="dropdown-item" href="#">0.9x</a>
                        <a class="dropdown-item" href="#">1x</a>
                        <a class="dropdown-item" href="#">1.1x</a>
                        <a class="dropdown-item" href="#">1.25x</a>
                        <a class="dropdown-item" href="#">1.50x</a>
                        <a class="dropdown-item" href="#">2x</a>
                    </div>
                </div>

                <div class="at-player-loading progress">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div
                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center font-weight-bold"
                    >
                        <span class="progress-value-number">0</span><sup class="small">%</sup>
                    </div>
                </div>
                <div class="at-song-details">
                    <span class="at-song-title"></span> - 
                    <span class="at-song-artist"></span>
                </div>
                <div class="at-time-position" data-toggle="tooltip" data-placement="top" title="Time Position"></div>
            </div>

            <div class="at-player-right">
                <a href="#" class="at-metronome disabled" data-toggle="tooltip" data-placement="top" title="Metronome">
                    <i class="fas fa-edit"></i>
                </a>
                <a href="#" class="at-loop disabled" data-toggle="tooltip" data-placement="top" title="Loop">
                    <i class="fas fa-retweet"></i>
                </a>
                <a href="#" class="at-print" data-toggle="tooltip" data-placement="top" title="Print">
                    <i class="fas fa-print"></i>
                </a>

                <div class="btn-group dropup">
                    <button type="button"
                            class="btn dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        <i class="fas fa-search"></i>
                        <span class="at-zoom-label">100%</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right at-zoom-options">
                        <a class="dropdown-item" href="#">25%</a>
                        <a class="dropdown-item" href="#">50%</a>
                        <a class="dropdown-item" href="#">75%</a>
                        <a class="dropdown-item" href="#">90%</a>
                        <a class="dropdown-item" href="#">100%</a>
                        <a class="dropdown-item" href="#">110%</a>
                        <a class="dropdown-item" href="#">125%</a>
                        <a class="dropdown-item" href="#">150%</a>
                        <a class="dropdown-item" href="#">200%</a>
                    </div>
                </div>


                <div class="btn-group dropup">
                    <button type="button"
                            class="btn dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        <i class="fas fa-search"></i>
                        <span class="at-zoom-label">select score</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right at-opengtpfile-options">
                        <a class="dropdown-item" href="/pu/gtpfile/guitarpro7/accentuations.gp">accentuations</a>
                        <a class="dropdown-item" href="/pu/gtpfile/guitarpro7/anacrusis.gp">anacrusis</a>
                        <a class="dropdown-item" href="/pu/gtpfile/guitarpro7/bends-advanced.gp">bends-advanced</a>
                        <a class="dropdown-item" href="/pu/gtpfile/guitarpro7/bends.gp">bends</a>
                        <a class="dropdown-item" href="/pu/gtpfile/guitarpro7/BinaryStylesheet">BinaryStylesheet</a>
                       
                    </div>
                </div>




                <div class="btn-group dropup">
                    <button type="button"
                            class="btn dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        <i class="fas fa-search"></i>
                        <span class="at-staveProfile-label">scoretab</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right at-staveProfile-options">
                        <a class="dropdown-item" href="#">Tab</a>
                        <a class="dropdown-item" href="#">score</a>
                        <a class="dropdown-item" href="#">scoretab</a>

                    </div>




                </div>

                <div class="btn-group dropup">
                    <button type="button"
                            class="btn dropdown-toggle at-layout-button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        Layout
                    </button>
                    <div class="dropdown-menu dropdown-menu-right at-layout-options">
                        <a class="dropdown-item" href="#" data-layout="horizontal-screen">
                            <i class="far fa-caret-square-right"></i> Horizontal Layout (Off-Screen)
                        </a>
                        <a class="dropdown-item" href="#" data-layout="horizontal-bar">
                            <i class="fas fa-caret-square-right"></i> Horizontal Layout (Bar Wise)
                        </a>
                        <a class="dropdown-item" href="#" data-layout="page">
                            <i class="fas fa-caret-square-down"></i> Vertical Layout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<template id="at-track-template">
    <div class="at-track" id="{{index}}">
        <div class="at-track-icon">
            <i class="fas fa-guitar"></i>
        </div>
        <span class="at-track-name">{{name}}</span>
        <div class="at-track-controls">
            <button type="button" class="btn btn-sm btn-outline-danger at-track-mute">Mute</button>
            <button type="button" class="btn btn-sm btn-outline-success at-track-solo">Solo</button>
            <button type="button" class="btn btn-sm btn-outline-success at-track-score">Score</button>
            <button type="button" class="btn btn-sm btn-outline-success at-track-tab" >Tab</button>



            <i class="fas fa-volume-up"></i>
            <input type="range" min="0" max="16" value="8" class="at-track-volume" />
        </div>
    </div>
</template>
